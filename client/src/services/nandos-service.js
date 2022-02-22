import axios from 'axios'
import { getToken, refreshToken } from '../utils/pkce-spotify'
import _ from 'lodash';

const API_URL = `https://api.spotify.com/v1`


export async function getListeners(trackId) {
    const response = await axios.get(`${process.env.VUE_APP_NANDOS_API_SERVICE_URL}/api/song/${trackId}/listeners`, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    return {
        status: response.status,
        data: response.data
    }
}

export async function addListener(trackId) {
    const response = await axios.post(`${process.env.VUE_APP_NANDOS_API_SERVICE_URL}/api/song/${trackId}`, {}, {
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    })
    return {
        status: response.status,
        data: response.data
    }
}

export async function getCurrentListeningSpoti() {

    let spotifyResponse = {
        user: null,
        currentlyPlaying: null,
        audioFeatures: null
    }

    // Authorize Check
    // Get Current logged in user
    spotifyResponse.user = await getUser();
    if (spotifyResponse.user.status === 401 || getToken() === "") {
        // Try Refresh token
        const refreshTokenResponse = await refreshToken();
        if (refreshTokenResponse.access_token) {
            spotifyResponse.user = await getUser();
        } else {
            return {
                status: 401,
                data: "Oops no log in at all..."
            }
        }
    }


    if (spotifyResponse.user.status !== 200) {
        return {
            status: spotifyResponse.user.status,
            data: spotifyResponse.user.data
        }
    }

    // Get Currently playing song
    spotifyResponse.currentlyPlaying = await currentlyPlaying();

    if (spotifyResponse.currentlyPlaying.status !== 200) {
        return {
            status: spotifyResponse.currentlyPlaying.status,
            data: spotifyResponse.currentlyPlaying.data
        }
    }

    // Check If there is a song currently plyaing
    if (!_.get(spotifyResponse.currentlyPlaying, 'data.item.id')) {
        return {
            status: 204,
            data: "No song identified"
        }
    }

    // Check for the audio features, no features, no response
    spotifyResponse.audioFeatures = await audioFeatures(spotifyResponse.currentlyPlaying.data.item.id);
    if (!_.get(spotifyResponse.audioFeatures, 'data.audio_features[0]')) {
        return {
            status: 204,
            data: "No audio features identified"
        }
    }


    return {
        status: 200,
        data: spotifyResponse
    }
}


export async function currentlyPlaying() {
    const config = {
        method: 'get',
        url: `${API_URL}/me/player/currently-playing`,
        headers: {
            'Authorization': `Bearer ${getToken()}`
        }
    }
    try {
        const response = await axios(config);
        return {
            status: response.status || 204,
            data: response.data
        }

    } catch (error) {
        if (_.get(error, 'response.data.error.status')) {
            return {
                status: error.response.data.error.status,
                data: error.response.data.error.message
            }
        } else {
            throw { status: 500, message: JSON.stringify(error) }
        }
    }
}


export async function audioFeatures(ids) {
    try {
        if (!ids) {
            throw "Specify some track ids"
        }
        const config = {
            method: 'get',
            url: `${API_URL}/audio-features?ids=${ids}`,
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        }

        const response = await axios(config);
        return {
            status: response.status,
            data: response.data
        }
    } catch (error) {
        if (_.get(error, 'response.data.error.status')) {
            return {
                status: error.response.data.error.status,
                data: error.response.data.error.message
            }
        } else {
            throw { status: 500, message: JSON.stringify(error) }
        }
    }
}

export async function getUser() {
    try {
        const response = await axios.get(`${API_URL}/me`, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });
        return {
            status: response.status,
            data: response.data
        }

    } catch (error) {
        if (_.get(error, 'response.data.error.status')) {
            return {
                status: error.response.data.error.status,
                data: error.response.data.error.message
            }
        } else {
            throw { status: 500, message: JSON.stringify(error) }
        }
    }

}

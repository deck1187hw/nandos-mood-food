import axios from 'axios'
import { getToken } from '../utils/pkce-spotify'


export async function getCurrentUserProfile() {
    const response = await axios.get(`${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me`, {
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return response.data
}

export async function getMyPlaylist() {
    const response = await axios.get(`${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/playlists?offset=0&limit=10`, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return response.data
}

export async function nextTrack() {
    const response = await axios.post(`${process.env.VUE_APP_SPOTIFY_API_URL}/v1/me/player/next`, {}, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return response.data
}

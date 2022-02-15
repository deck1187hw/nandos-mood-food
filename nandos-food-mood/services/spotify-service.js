const axios = require('axios');
const _ = require('lodash');

const API_URL = `https://api.spotify.com/v1`

class Spotify {

    constructor(accessToken) {
        this.accessToken = accessToken;

    }

    printToken() {
        return this.accessToken
    }

    async currentlyPlaying() {
        const config = {
            method: 'get',
            url: `${API_URL}/me/player/currently-playing`,
            headers: {
                'Authorization': `${this.accessToken}`
            }
        }
        try {
            const response = await axios(config);
            return {
                status: response.status !== 204,
                data: response.data
            }

        } catch (error) {
            if (_.get(error, 'response.data.error')) {
                throw { status: error.response.data.error.status, message: error.response.data.error.message }
            } else {
                throw { status: 500, message: JSON.stringify(error) }
            }
        }
    }
    async audioFeatures(ids) {

        try {
            if (!ids) {
                throw "Specify some track ids"
            }
            const config = {
                method: 'get',
                url: `${API_URL}/audio-features?ids=${ids}`,
                headers: {
                    'Authorization': `${this.accessToken}`
                }
            }

            const response = await axios(config);
            return {
                status: true,
                data: response.data
            }
        } catch (error) {
            if (_.get(error, 'response.data.error')) {
                throw { status: error.response.data.error.status, message: error.response.data.error.message }
            } else {
                throw { status: 500, message: JSON.stringify(error) }
            }
        }
    }

}
module.exports = Spotify;


// export async function callApi() {
//     const response = await axios.get(`${process.env.VUE_APP_NANDOS_API_SERVICE_URL}/api`, {
//         headers: {
//             'Authorization': 'Bearer ' + getToken()
//         }
//     })
//     return response.data
// }


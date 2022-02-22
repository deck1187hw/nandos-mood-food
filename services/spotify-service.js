const axios = require('axios');
const _ = require('lodash');

const API_URL = `https://api.spotify.com/v1`

function _showError(error) {
    let errorResponse = {
        status: 500,
        message: JSON.stringify(error)
    }

    if (_.get(error, 'response.data.error.status')) {
        errorResponse = {
            status: error.response.data.error.status,
            message: JSON.stringify(error)
        }
    }

    return errorResponse

}

class Spotify {

    constructor(accessToken) {
        this.accessToken = accessToken;

    }

    async getSong(id) {
        try {

            const res = await axios({
                method: 'get',
                url: `${API_URL}/tracks/${id}`,
                headers: {
                    'Authorization': `${this.accessToken}`
                }
            });

            return res.data;

        } catch (error) {
            throw _showError(error);

        }
    }

    async getUser() {
        try {
            const response = await axios.get(`${API_URL}/me`, {
                headers: {
                    'Authorization': `${this.accessToken}`
                }
            });
            return response.data
        } catch (error) {
            throw _showError(error);
        }
    }


}
module.exports = Spotify;
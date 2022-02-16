import axios from 'axios'
import { getToken } from '../utils/pkce-spotify'


export async function getCurrentListening() {
    const response = await axios.get(`${process.env.VUE_APP_NANDOS_API_SERVICE_URL}/api`, {
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
    return {
        status: response.status,
        data: response.data
    }
}

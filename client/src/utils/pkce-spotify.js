// create the code verifier and challenge
import pkceChallenge from 'pkce-challenge'
import { v4 as uuid } from 'uuid'
import axios from 'axios'

// construct the authorization URI

const STATE_KEY = 'spotify_auth_state'
const CODE_VERIFIER_KEY = 'spotify_code_verifier'
const ACCESS_TOKEN_KEY = 'spotify_access_token'
const ACCESS_TOKEN_EXPIRES_KEY = 'spotify_access_token_expires_in'
const ACCESS_TOKEN_REFRESH_KEY = 'spotify_access_token_refresh'
const SCOPE = 'user-read-playback-state'
const CLIENT_ID = process.env.VUE_APP_SPOTIFY_CLIENT_ID
const REDIRECT_URI = process.env.VUE_APP_SPOTIFY_REDIRECT_URI
const CODE_CHALLENGE_METHOD = 'S256'
const URL_SPOTIFY_ACCOUNT = process.env.VUE_APP_SPOTIFY_ACCOUNT_URL


function createAuthorizationURI() {
    const { code_challenge, code_verifier } = pkceChallenge()
    const state = uuid()
    localStorage.setItem(CODE_VERIFIER_KEY, code_verifier)
    localStorage.setItem(STATE_KEY, state)

    return `${URL_SPOTIFY_ACCOUNT}/authorize?` + new URLSearchParams({
        client_id: CLIENT_ID,
        response_type: 'code',
        redirect_uri: REDIRECT_URI,
        code_challenge_method: CODE_CHALLENGE_METHOD,
        code_challenge,
        scope: SCOPE,
        state: state
    }).toString()
}


// go to authorization URI
function goAuthorizationURI() {
    window.location.href = createAuthorizationURI()
}

function logout() {
    localStorage.setItem(ACCESS_TOKEN_KEY, "")
    localStorage.setItem(ACCESS_TOKEN_EXPIRES_KEY, "")
    localStorage.setItem(ACCESS_TOKEN_REFRESH_KEY, "")
}

async function generateToken(state, code) {
    const savedState = localStorage.getItem(STATE_KEY)
    localStorage.removeItem(STATE_KEY)
    if (state !== savedState) {
        return { error: true }
    }
    const postConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    };
    const parameters = {
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        code,
        redirect_uri: REDIRECT_URI,
        code_verifier: localStorage.getItem(CODE_VERIFIER_KEY)
    }

    try {
        const response = await axios.post(
            `${URL_SPOTIFY_ACCOUNT}/api/token`,
            new URLSearchParams(parameters).toString()
            , postConfig
        )
        return response.data;
    } catch (err) {
        return { error: true }
    }
}
async function refreshToken() {
    const refreshToken = localStorage.getItem(ACCESS_TOKEN_REFRESH_KEY);
    const postConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
        },
    };
    const parameters = {
        client_id: CLIENT_ID,
        grant_type: 'refresh_token',
        refresh_token: refreshToken
    }

    try {
        const response = await axios.post(
            `${URL_SPOTIFY_ACCOUNT}/api/token`,
            new URLSearchParams(parameters).toString(), postConfig
        )
        saveToken(response.data);
        return response.data;
    } catch (err) {
        return { error: true }
    }
}

function saveToken(tokenData) {
    const { access_token, expires_in, refresh_token } = tokenData;
    localStorage.setItem(ACCESS_TOKEN_KEY, access_token)
    localStorage.setItem(ACCESS_TOKEN_EXPIRES_KEY, Math.floor(Date.now() / 1000) + expires_in)
    localStorage.setItem(ACCESS_TOKEN_REFRESH_KEY, refresh_token)
}

function getToken() {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export default goAuthorizationURI
export { generateToken, saveToken, getToken, refreshToken, logout }
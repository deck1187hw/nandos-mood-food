require('dotenv').config();
const express = require('express');
const history = require('connect-history-api-fallback');
const _ = require('lodash');
const bodyParser = require('body-parser');
const spotify = require('./services/spotify-service');
const cors = require('cors')

console.log('ENV',process.env)

const app = express();
const host = 'http://localhost';
const port = 8080;

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('public');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// User CORS only for dev
if (process.env.NODE_ENV !== 'production') {
    app.use(cors())
}


var router = express.Router();

router.get('/', async function (req, res) {
    if (!_.get(req, 'headers.authorization')) {
        return res.status(401).json({ error: "Spotify Authorization not present" });
    }
    let = spotifyResponse = {}

    try {

        const spoti = new spotify(req.headers.authorization);

        spotifyResponse.currentlyPlaying = await spoti.currentlyPlaying();

        if (!_.get(spotifyResponse.currentlyPlaying, 'data.item.id')) {
            return res.status(204).json({ error: "No song identified" });
        }


        spotifyResponse.audioFeatures = await spoti.audioFeatures(spotifyResponse.currentlyPlaying.data.item.id);

        res.json({ data: spotifyResponse });

    } catch (error) {
        console.log(error)
        return res.status(error.status).json({ error: error.message });
    }

});

app.use('/api', router);

// app.use(express.static('public'));

// 1st call for unredirected requests 
app.use(staticFileMiddleware);

// Support history api
// this is the HTTP request path not the path on disk
app.use(history({
    index: '/index.html'
}));

// 2nd call for redirected requests
app.use(staticFileMiddleware);


app.listen(port, () => {
    console.log(`App listening on ${host}:${port}`);
});
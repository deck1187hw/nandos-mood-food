require('dotenv').config();
const express = require('express');
const history = require('connect-history-api-fallback');
const _ = require('lodash');
const bodyParser = require('body-parser');
const spotify = require('./services/spotify-service');
const cors = require('cors')

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
    return res.status(200).json({});
});

app.use('/api', router);

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
require('dotenv').config();
const express = require('express');
const history = require('connect-history-api-fallback');
const _ = require('lodash');
const bodyParser = require('body-parser');
const { Firestore } = require('@google-cloud/firestore');
const spotify = require('./services/spotify-service');
const menu = require('./services/menu-service');
const db = require('./services/db-service');
const cors = require('cors');
const NodeCache = require("node-cache");

const app = express();
const host = 'http://localhost';
const port = 8080;

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('public');
const nandosCache = new NodeCache({ stdTTL: 600 });
const dbN = new db(nandosCache);


function verifyAuth(secret) {
    return secret === process.env.SECRET_KEY && secret;
}

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

router.post('/song/:id', async function (req, res) {
    try {
        if (!_.get(req, 'headers.authorization')) {
            return res.status(401).json({ error: "Spotify authorization not present" });
        }

        const songId = req.params['id'];

        // Authorize user
        const spoti = new spotify(req.headers.authorization);

        // Check if song exists
        const song = await spoti.getSong(songId);

        // Check if user exists
        const user = await spoti.getUser();

        // Get Random Menu item id
        const menuItem = await dbN.getRandom();
        //const item = await dbN.getMenuItem(menuItem);

        // Add / Override song listener
        const songListener = await dbN.addSongListener({ song: song, username: user.id, menuItem: menuItem });

        // Flush Cache for this song
        dbN.clearCache(`song_${song.id}`);

        // Get all listeners for this song
        const listeners = await dbN.getListeners(song.id);

        return res.status(200).json({ listeners: listeners });


    } catch (error) {
        console.error(JSON.stringify(error))
        return res.status(500).json(error);
    }

});

router.get('/song/:id/listeners', async function (req, res) {
    try {
        if (!_.get(req, 'headers.authorization')) {
            return res.status(401).json({ error: "Spotify authorization not present" });
        }
        const songId = req.params['id']

        // Authorize user
        const spoti = new spotify(req.headers.authorization);

        // Check if song exists
        const song = await spoti.getSong(songId);

        // Get all (cached) listeners
        const listeners = await dbN.getListeners(req.params['id']);

        return res.status(200).json(listeners);


    } catch (error) {
        console.error(JSON.stringify(error))
        return res.status(500).json(error);
    }

});


router.get('/fetch-menu', async function (req, res) {

    if (!verifyAuth(req.headers["nandos-auth"])) {
        res.status(401).send("You don't have permission to perform this action");
        return;
    }
    try {
        const nandosMenu = new menu();

        const meunAll = await nandosMenu.getMenu();

        const sections = ["section:starters", "section:pe-ri-pe-ri-chicken", "section:burgers-pittas-wraps", "section:sharing-platters", "section:veggie", "section:sides"]

        // Update Menu
        let total = 0;
        let indices = [];
        for (const section of meunAll.data.menu.sections) {
            if (sections.includes(section.id)) {
                total += section.items.length;
                for (const item of section.items) {
                    item.id = item.id.split(':')[0];
                    indices.push(item.id)
                    var mainItem = { ...item, kind: section.kind };
                    await dbN.upsert('menu', mainItem.id, mainItem)

                }
            }
        }
        // Update metadata
        await dbN.upsert('metadata', "menu", { size: total, indices: indices, bastes: meunAll.data.menu.bastes });


    } catch (error) {
        console.error(JSON.stringify(error))
        return res.status(500).json({ status: `Error updating menu and bastes, ERROR, ${JSON.stringify(error)}` });
    }


    return res.status(200).json({ status: "Menu updated" });

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
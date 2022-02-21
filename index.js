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

const app = express();
const host = 'http://localhost';
const port = 8080;

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('public');

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

router.get('/fetch-menu', async function (req, res) {

    if (!verifyAuth(req.headers["nandos-auth"])) {
        res.status(401).send("You don't have permission to perform this action");
        return;
    }

    try {
        const nandosMenu = new menu();

        const meunAll = await nandosMenu.getMenu();

        const dbN = new db();

        const sections = ["section:starters", "section:pe-ri-pe-ri-chicken", "section:burgers-pittas-wraps", "section:sharing-platters", "section:veggie", "section:sides"]

        // Update Menu
        for (const section of meunAll.data.menu.sections) {
            if (sections.includes(section.id)) {
                for (const item of section.items) {
                    item.id = item.id.split(':')[0];
                    var mainItem = { ...item, kind: section.kind };
                    await dbN.upsert('menu', mainItem.id, mainItem)

                }
            }
        }

        // Update Bastes
        for (const baste of meunAll.data.menu.bastes) {
            await dbN.upsert('bastes', baste.slug, {
                slug: baste.slug,
                displayName: baste.displayName,
                description: baste.description,
                diets: baste.diets,
                nutritionalMessage: baste.nutritionalMessage,
            })
        }
    } catch (error) {
        return res.status(500).json({ status: "error updating menu and bastes" });
    }


    return res.status(200).json({ status: "menu updated" });

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
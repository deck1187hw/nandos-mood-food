const axios = require('axios');
const _ = require('lodash');


const API_URL = `https://api.nandos.services`
const NANDOS_SERVICE_TOKEN = process.env.NANDOS_SERVICE_TOKEN;

class Menu {

    constructor() {


    }

    async getMenu() {
        try {

            var data = JSON.stringify({
                "operationName": "UkMenu",
                "variables": {},
                "query": "query UkMenu {\n  menu(market: UK) {\n    id\n    name\n    imageMetadata {\n      aspectRatio_16_9\n      aspectRatio_1_1\n      baseUrl\n      urlTemplate\n    }\n    startDate\n    endDate\n    bastes {\n      id\n      slug\n      displayName\n      description\n      diets\n      nutritionalMessage\n    }\n    sections {\n      id\n      displayName\n      kind\n      items {\n        id\n        plu\n        slug\n        displayName\n        description\n        fulfilmentTypes\n        image {\n          aspectRatio_16_9 {\n            filename\n            res640x360\n          }\n          aspectRatio_1_1 {\n            filename\n            res1932x1932\n            res1284x1284\n            res916x916\n            res200x200\n          }\n          altText\n        }\n        eligibleRewards {\n          rewardType\n          priceAdjustment {\n            currencyCode\n            value\n          }\n        }\n        flags\n        ageRestricted\n      }\n    }\n  }\n}\n"
            });

            var config = {
                method: 'post',
                url: `${API_URL}/menu-v2/query`,
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${NANDOS_SERVICE_TOKEN}`,

                },
                data: data
            };

            const result = await axios(config);
            return result.data;


        } catch (error) {
            throw error
        }
    }


}
module.exports = Menu;
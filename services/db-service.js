const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();
const _ = require('lodash');

class Db {

    constructor(nandosCache) {
        this.cache = nandosCache;
        this.menu = db.collection("menu");
        this.metadata = db.collection("metadata")
    }

    clearCache(cacheId) {
        try {
            this.cache.del(cacheId);
        } catch (error) {
            throw error
        }
    }

    async getMetadata() {
        try {
            // Cached metadata
            let metadata = this.cache.get('metadata');
            if (metadata == null) {
                metadata = await this.readCollection("metadata", "menu");
                this.cache.set('metadata', metadata, 86400); // time-to-live is set to 1 day.
            }
            return metadata;

        } catch (error) {
            throw error
        }
    }

    async getListeners(id) {
        try {
            // Cached listeners by songId
            let listeners = this.cache.get(`song_${id}`);
            const that = this;
            if (listeners == null) {
                const dbQuery = await db.collection("songs").doc(id).collection("listeners").orderBy("created", "desc").limit(50).get();
                listeners = dbQuery.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data(),
                        created: doc._createTime,
                        foodData: {}
                    }
                });
                // Populate Food
                for (let i = 0; i < listeners.length; i++) {
                    listeners[i].foodData = await this.getMenuItem(listeners[i].data.nandos_menu_item);
                }
                this.cache.set(`song_${id}`, listeners, 1); // time-to-live is set 1 day will be flushed on every update.
            }
            return listeners;

        } catch (error) {
            console.error('ERROR ', error)
            throw error;
        }
    }

    async getSongs(id) {
        try {
            // Cached users by user.id
            let songs = this.cache.get(`user_${id}`);
            const that = this;
            if (songs == null) {
                const dbQuery = await db.collection("users").doc(id).collection("songs").orderBy("created", "desc").limit(50).get();
                songs = dbQuery.docs.map(doc => {
                    return {
                        id: doc.id,
                        data: doc.data(),
                        created: doc._createTime,
                        foodData: {}
                    }
                });
                // Populate Food
                for (let i = 0; i < songs.length; i++) {
                    songs[i].foodData = await this.getMenuItem(songs[i].data.nandos_menu_item);
                }
                this.cache.set(`user_${id}`, songs, 60); // time-to-live is set 1 day will be flushed on every update.
            }
            return songs;

        } catch (error) {
            console.error('ERROR ', error)
            throw error;
        }
    }

    async addSongListener(listener) {
        try {
            let ref;
            if (listener.username === null) {
                ref = db.collection("songs").doc(listener.song.id).collection("listeners").doc();
            } else {
                ref = db.collection("songs").doc(listener.song.id).collection("listeners").doc(listener.username);
            }
            const data = {
                id: ref.id,
                nandos_menu_item: listener.menuItem,
                created: new Date()
            }
            const result = await ref.set(data);
            return result;

        } catch (error) {
            throw error
        }
    }

    async addUserSong(listener) {
        try {
            let ref;
            if (listener.song.id === null) {
                ref = db.collection("users").doc(listener.username).collection("songs").doc();
            } else {
                ref = db.collection("users").doc(listener.username).collection("songs").doc(listener.song.id);
            }
            const data = {
                id: ref.id,
                nandos_menu_item: listener.menuItem,
                song: listener.song,
                created: new Date()
            }
            const result = await ref.set(data);
            return result;

        } catch (error) {
            console.error(error)
            throw error
        }
    }


    // Creates or updates
    async upsert(collection, id, data) {
        try {
            let ref;
            if (id === null) {
                ref = db.collection(collection).doc();
            } else {
                ref = db.collection(collection).doc(id);
            }

            data.id = ref.id;
            data = { ...data };
            await ref.set(data);
            return data;
        } catch (error) {
            console.error('ERROR: ', error)
            throw error
        }

    }

    async getMenuItem(id) {
        try {

            const items = await this.getMenuItems();
            return items.filter(item => item.id === id);

        } catch (error) {
            throw error
        }
    }
    async getMenuItems() {
        try {
            // Cached metadata
            let menu = this.cache.get('menu');
            if (menu == null) {
                console.log('Getting firestore...');
                const dbQuery = await db
                    .collection("menu")
                    .get();
                menu = dbQuery.docs.map(doc => doc.data());
                this.cache.set('menu', menu, 86400); // time-to-live is set to 1 day.
            }

            return menu;

        } catch (error) {
            console.error(error)
            throw error
        }
    }

    async readCollection(collection, id) {
        try {
            const doc = await db
                .collection(collection)
                .doc(id)
                .get();
            if (typeof doc.data() === 'undefined') {
                return false
            }
            return doc.data();
        } catch (error) {
            throw error
        }

    }


    async getRandom() {

        try {

            const metadata = await this.getMetadata();
            return _.sample(metadata.indices);
        } catch (error) {
            console.error(error)
        }

    }


}
module.exports = Db;
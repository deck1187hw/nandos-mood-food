const { Firestore } = require('@google-cloud/firestore');
const db = new Firestore();


class Db {

    constructor() {


    }


    // Creates or updates
    async upsert(collection, id, data) {
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
    }


}
module.exports = Db;
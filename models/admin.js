
const getDb = require('../util/database').getDb;

class Admin {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    save() {
        const db = getDb();
        return db.collection('Admins')
            .insertOne(this)
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

module.exports = Admin;


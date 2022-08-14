const bcrypt = require('bcrypt');

const Admin = require('../models/admin')


class AdminController {
    constructor() { }

    async registerAdmin(admin) {
        const hash = await bcrypt.hash(admin.password, 12);
        const email = admin.email;
        const password = hash;
        const newAdmin = new Admin(email, password);
        return newAdmin.save().
            then(result => {
                console.log(result);
                console.log('Admin was created');
            })
            .catch(err => {
                console.log(err);
            });
    }


}

module.exports = new AdminController();


const express = require('express');
const bodyParser = require('body-parser');


const mongoConnect = require('./util/database').mongoConnect;
const adminRoutes = require('./routes/admin');
const urls = require('./settings/urls');

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use((req, res, next) => {
    const allowedOrigins = urls.clientOrigin;
    const requestOrigin = req.headers.origin;
    console.log(requestOrigin);
    console.log(allowedOrigins);
    if (allowedOrigins.includes(requestOrigin))
        res.setHeader('Access-Control-Allow-Origin', requestOrigin);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Requested-By');

    next();
});

app.use('/api/admin', adminRoutes);

mongoConnect(() => {
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
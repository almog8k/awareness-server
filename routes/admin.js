const express = require('express');

const asyncHandler = require('../util/asyncHandler');
const controller = require('../controllers/admin');

const router = express.Router();

router.post('/signup', asyncHandler(async (req, res, next) => {
    const admin = req.body;
    res.json(await controller.registerAdmin(admin));
}));

router.post('/login', asyncHandler(async (req, res, next) => {
    const admin = req.body;
    res.json(await controller.postLogin(admin));
}));


module.exports = router;
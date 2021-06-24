module.exports = app => {
    const addressController = require('../controllers/address.controller');

    const router = require("express").Router();

    router.post('/', addressController.newAddress);

    app.use("/api/address", router);
};
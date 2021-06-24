module.exports = app => {
    const addressController = require('../controllers/address.controller');

    const router = require("express").Router();

    // GET all addresses
    router.get('/', addressController.getAll);

    router.post('/', addressController.newAddress);

    app.use("/api/address", router);
};
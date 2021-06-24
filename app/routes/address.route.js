module.exports = app => {
    const addressController = require('../controllers/address.controller');

    const router = require("express").Router();

    // GET all addresses
    router.get('/', addressController.getAll);

    // GET address by id
    router.get('/:id', addressController.getById);

    // POST a new address
    router.post('/', addressController.newAddress);

    // PUT an update to an address
    router.put('/:id', addressController.update);

    // DELETE an address by id
    router.delete('/:id', addressController.deleteById);

    app.use("/api/address", router);
};
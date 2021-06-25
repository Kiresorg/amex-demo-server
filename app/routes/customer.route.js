module.exports = app => {
    const customerController = require('../controllers/customer.controller');

    const router = require("express").Router();

    // GET all customers
    router.get('/', customerController.getAll);

    // GET customer by id
    router.get('/:id', customerController.getById);

    // POST a new customer
    router.post('/', customerController.create);

    // PUT an update to an customer
    router.put('/:id', customerController.update);

    // DELETE an customer by id
    router.delete('/:id', customerController.deleteById);

    app.use("/api/customer", router);
};
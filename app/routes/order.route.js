module.exports = app => {
    const orderController = require('../controllers/order.controller');

    const router = require("express").Router();

    // GET all orders
    router.get('/', orderController.getAll);

    // GET order by id
    router.get('/:id', orderController.getById);

    // POST a new order
    router.post('/', orderController.create);

    // PUT an update to an order
    router.put('/:id', orderController.update);

    // DELETE an order by id
    router.delete('/:id', orderController.deleteById);

    app.use("/api/order", router);
};
module.exports = app => {
    const productController = require('../controllers/product.controller');

    const router = require("express").Router();

    // GET all products
    router.get('/', productController.getAll);

    // GET product by id
    router.get('/:id', productController.getById);

    // POST a new product
    router.post('/', productController.create);

    // PUT an update to a product
    router.put('/:id', productController.update);

    // DELETE a product by id
    router.delete('/:id', productController.deleteById);

    app.use("/api/product", router);
};
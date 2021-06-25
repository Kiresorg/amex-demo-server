const model = require('../sequelize/models');

exports.create = (req, res) => {
    let sku = req.body.sku;
    let price = req.body.price;
    let name = req.body.name;
    let description = req.body.description;
    let quantity = req.body.quantity;

    model.Product.create({
        sku: sku,
        price: price,
        name: name,
        description: description,
        quantity: quantity
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on create product: " + error);
    })
}

exports.getAll = (req, res) => {
    model.Product.findAll({
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on get all products: " + error);
    })
}

exports.getById = (req, res) => {
    model.Product.findOne({
        where: {
            id: req.params.id
        }
    }).then (result => {
        if(!result) {
            res.sendStatus(404);
        }
        else {
            res.status(200).send(result);
        }
    }).catch (error => {
        res.status(500).send("Error on get product with id of" + req.params.id + ": " + error);
    })
}

exports.update = (req, res) => {
    model.Product.update({
        sku: req.body.sku,
        price: req.body.price,
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity
    }, {
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on updating product with id of" + req.params.id + ": " + error);
    })
}

exports.deleteById = (req, res) => {
    model.Product.destroy({
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.sendStatus(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on deleting product with id of" + req.params.id + ": " + error);
    })
}
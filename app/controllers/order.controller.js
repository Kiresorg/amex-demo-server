const model = require('../sequelize/models');

exports.create = (req, res) => {
    let customerId = req.body.customerId;
    let order_status = req.body.order_status;
    let datetime_order_placed = req.body.datetime_order_placed;
    let total_order_price = req.body.total_order_price;
    let order_notes = req.body.order_notes;

    model.Order.create({
        customerId: customerId,
        order_status: order_status,
        datetime_order_placed: datetime_order_placed,
        total_order_price: total_order_price,
        order_notes: order_notes
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on create order: " + error);
    })
}

exports.getAll = (req, res) => {
    model.Order.findAll({
        attributes: [
            'id',
            'customerId',
            'order_status',
            'datetime_order_placed',
            'total_order_price',
            'order_notes'
        ]
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on get all orders: " + error);
    })
}

exports.getById = (req, res) => {
    model.Order.findOne({
        attributes: [
            'id',
            'customerId',
            'order_status',
            'datetime_order_placed',
            'total_order_price',
            'order_notes'
        ],
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
        res.status(500).send("Error on get order with id of" + req.params.id + ": " + error);
    })
}

exports.update = (req, res) => {
    model.Order.update({
        customerId: req.body.customerId,
        order_status: req.body.order_status,
        datetime_order_placed: req.body.datetime_order_placed,
        total_order_price: req.body.total_order_price,
        order_notes: req.body.order_notes
    }, {
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on updating order with id of" + req.params.id + ": " + error);
    })
}

exports.deleteById = (req, res) => {
    model.Order.destroy({
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.sendStatus(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on deleting order with id of" + req.params.id + ": " + error);
    })
}
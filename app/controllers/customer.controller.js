const model = require('../sequelize/models');

exports.create = (req, res) => {
    let first_name = req.body.first_name;
    let middle_name = req.body.middle_name;
    let last_name = req.body.last_name;
    let phone = req.body.phone;
    let email = req.body.email;
    let notes = req.body.notes;
    let addressId = req.body.addressId;

    model.Customer.create({
        first_name: first_name,
        middle_name: middle_name,
        last_name: last_name,
        phone: phone,
        email: email,
        notes: notes,
        addressId: addressId
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on create customer: " + error);
    })
}

exports.getAll = (req, res) => {
    model.Customer.findAll({
        attributes: [
            'id',
            'first_name',
            'middle_name',
            'last_name',
            'phone',
            'email',
            'notes',
            'addressId'
        ],
        order: [
            ['last_name', 'ASC'],
        ]
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on get all customers: " + error);
    })
}

exports.getById = (req, res) => {
    model.Customer.findOne({
        attributes: [
            'id',
            'first_name',
            'middle_name',
            'last_name',
            'phone',
            'email',
            'notes',
            'addressId'
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
        res.status(500).send("Error on get customer with id of" + req.params.id + ": " + error);
    })
}

exports.update = (req, res) => {
    model.Customer.update({
        first_name: req.body.first_name,
        middle_name: req.body.middle_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        email: req.body.email,
        notes: req.body.notes,
        addressId: req.body.addressId
    }, {
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on updating customer with id of" + req.params.id + ": " + error);
    })
}

exports.deleteById = (req, res) => {
    model.Customer.destroy({
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.sendStatus(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on deleting customer with id of" + req.params.id + ": " + error);
    })
}
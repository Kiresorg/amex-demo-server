const model = require('../sequelize/models');

exports.newAddress = (req, res) => {
    let address_line1 = req.body.address_line1;
    let address_line2 = req.body.address_line2;
    let city = req.body.city;
    let state = req.body.state;
    let zip = req.body.zip;

    model.Address.create({
        address_line1: address_line1,
        address_line2: address_line2,
        city: city,
        state: state,
        zip: zip
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on create address: " + error);
    })
}

exports.getAll = (req, res) => {
    model.Address.findAll({
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on get all addresses: " + error);
    })
}
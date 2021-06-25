const { Sequelize } = require('../sequelize/models');
const model = require('../sequelize/models');

exports.create = (req, res) => {
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
    const searchTerm = req.query.searchTerm;
    const Op = Sequelize.Op;
    if(searchTerm) {
        model.Address.findAll({
            where: {
                [Op.or]: [
                { address_line1: { [Op.like]: '%' + searchTerm + '%' }},
                { address_line2: { [Op.like]: '%' + searchTerm + '%' }},
                { city: { [Op.like]: '%' + searchTerm + '%' }}
                ]
            }
        }).then (result => {
            res.status(200).send(result);
        }).catch (error => {
            res.status(500).send("Error on get all addresses: " + error);
        })
    }
    else {
        model.Address.findAll({
        }).then (result => {
            res.status(200).send(result);
        }).catch (error => {
            res.status(500).send("Error on get all addresses: " + error);
        })
    }
}

exports.getById = (req, res) => {
    model.Address.findOne({
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
        res.status(500).send("Error on get address with id of" + req.params.id + ": " + error);
    })
}

exports.update = (req, res) => {
    model.Address.update({
        address_line1: req.body.address_line1,
        address_line2: req.body.address_line2,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip
    }, {
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.status(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on updating address with id of" + req.params.id + ": " + error);
    })
}

exports.deleteById = (req, res) => {
    model.Address.destroy({
        where: {
            id: req.params.id
        }
    }).then (result => {
        res.sendStatus(200).send(result);
    }).catch (error => {
        res.status(500).send("Error on deleting address with id of" + req.params.id + ": " + error);
    })
}
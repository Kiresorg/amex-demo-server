const {Sequelize, DataTypes} = require('sequelize');

module.exports = (sequelize, Sequelize) => { 
    var Customer = sequelize.define('customer', 
        {
            first_name: {
                type: DataTypes.STRING,
                allowNull: true
            },
            middle_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            last_name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            customer_notes: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: true }
    );

    return Customer;
};
const {Sequelize, DataTypes} = require('sequelize');


module.exports = (sequelize, Sequelize) => { 
    var Order = sequelize.define('order', 
        {
            order_status: {
                type: DataTypes.STRING,
                allowNull: false
            },
            datetime_order_places: {
                type: DataTypes.STRING,
                allowNull: true
            },
            total_order_price: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            order_notes: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: false }
    );

    return Order;
};
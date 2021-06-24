'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Customer, {foreignKey: 'customerId'});

      //Order has many-to-many relationship with Product
      Order.belongsToMany(models.Product, {
        through: models.OrderProduct,
        foreignKey: 'order_id'
      })
    }
  };
  Order.init({
    customerId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Customer',
        key: 'id'
      }
    },
    order_status: DataTypes.STRING,
    datetime_order_places: DataTypes.DATE,
    total_order_price: DataTypes.INTEGER,
    order_notes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
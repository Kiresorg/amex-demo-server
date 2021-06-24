'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderProduct.init({
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Orders',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Products',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'OrderProduct',
  });
  return OrderProduct;
};
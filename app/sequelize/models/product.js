'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      //Product has many-to-many relationship with Order
      Product.belongsToMany(models.Order, {
        through: models.OrderProduct,
        foreignKey: 'product_id'
      })
    }
  };
  Product.init({
    sku: DataTypes.STRING,
    price: DataTypes.DECIMAL(10,2),
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
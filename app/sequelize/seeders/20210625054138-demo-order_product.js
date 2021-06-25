'use strict';

const fake = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let product_orders = [];
    let orders = await queryInterface.sequelize.query(
      `SELECT id from orders;`
    );
    let products = await queryInterface.sequelize.query(
      `SELECT id from Products;`
    );
    for(let i=0; i<=100; i++){
      product_orders.push({
        order_id: orders[0][Math.floor(Math.random()*orders[0].length)].id,
        product_id: products[0][Math.floor(Math.random()*products[0].length)].id,
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }

  await queryInterface.bulkInsert('OrderProducts',product_orders, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('OrderProducts', null, {});
  }
};

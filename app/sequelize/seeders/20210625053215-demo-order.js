'use strict';

const fake = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let orders = [];
    let customers = await queryInterface.sequelize.query(
      `SELECT id from Customers;`
    );
    for(let i=0; i<=100; i++){
      orders.push({
        order_status: 'Open',
        datetime_order_placed: new Date(),
        total_order_price: fake.finance.amount(),
        order_notes: fake.lorem.paragraph(),
        customerId: customers[0][Math.floor(Math.random()*customers[0].length)].id,
        createdAt:new Date(),
        updatedAt:new Date(),
      });
    }
     await queryInterface.bulkInsert('Orders',orders, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};

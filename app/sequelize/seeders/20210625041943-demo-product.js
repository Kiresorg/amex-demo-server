'use strict';

const fake = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let products = [];
    
    for(let i=0; i<=100; i++){
      products.push({
        sku: fake.datatype.number({
          'min':10000,
          'max':99999
        }),
        price: fake.finance.amount(),
        name: fake.commerce.productName(),
        description: fake.commerce.productDescription(),
        quantity: fake.datatype.number({
          'min': 1,
          'max': 20
        }),
        createdAt:new Date(),
        updatedAt:new Date(),
      })
    }
    // for(let i=0; i<=100; i++){
    //   products.push({
    //     order_status: 'Open',
    //     date_time_order_placed: new Date(),
    //     total_order_price: fake.finance.amount(),
    //     order_notes: fake.lorem.paragraph(),
    //     createdAt:new Date(),
    //     updatedAt:new Date(),
    //   });

  await queryInterface.bulkInsert('Products',products, {})
},

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};

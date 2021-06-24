'use strict';
const fake = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let addresses = [];
    for(let i=0; i<=100; i++){
      addresses.push({
        address_line1: fake.address.streetAddress(),
        address_line2: fake.address.secondaryAddress(),
        city: fake.address.city(),
        state: fake.address.state(),
        zip: fake.address.zipCode(),
        createdAt:new Date(),
        updatedAt:new Date(),
      });
    }
     await queryInterface.bulkInsert('Addresses',addresses, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Addresses', null, {});
  }
};

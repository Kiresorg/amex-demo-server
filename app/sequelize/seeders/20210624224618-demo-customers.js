'use strict';

const LoremIpsum = require("lorem-ipsum").LoremIpsum;
const fake = require("faker");
const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 2,
    min: 1
  },
  wordsPerSentence: {
    max: 7,
    min: 4
  }
});

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let customers = [];
    let addresses = await queryInterface.sequelize.query(
      `SELECT id from Addresses;`
    );
    for(let i=0; i<=100; i++){
      let fake_notes = lorem.generateParagraphs(1);

      customers.push({
        first_name: fake.name.firstName(),
        middle_name: fake.name.middleName(),
        last_name: fake.name.lastName(),
        phone: fake.phone.phoneNumber(),
        email: fake.internet.email(),
        notes: fake_notes,
        addressId: addresses[0][Math.floor(Math.random()*addresses[0].length)].id,
        createdAt:new Date(),
        updatedAt:new Date(),
      });
    }
     await queryInterface.bulkInsert('Customers',customers, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Customers', null, {});
  }
};

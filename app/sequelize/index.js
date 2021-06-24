const { Sequelize } = require('sequelize');
const { applyExtraSetup } = require('../sequelize/relationships');
const config = require('../../config/secret-config.json');

const db = config.DB;
const user = config.USER;
const password = config.PASSWORD;

// connection to database
const sequelize = new Sequelize(db, user, password, {
    host: process.env.HOST,
    dialect: 'mysql',
    operatorsAliases: false,
  
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

const modelDefiners = [
    require('./models/customer.model'),
	require('./models/order.model')
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}

// We execute any extra setup after the models are defined, such as adding associations.
applyExtraSetup(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;

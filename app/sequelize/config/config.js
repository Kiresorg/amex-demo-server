const config = require('../../../config/secret-config.json');

module.exports =  {
      "username": config.USER,
      "password": config.PASSWORD,
      "database": config.DB,
      "host": config.HOST,
      "dialect": "mysql"
} 
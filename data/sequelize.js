const Sequelize = require('sequelize');
const ENV = require('dotenv').load();
const sequelize = new Sequelize(ENV.DBNAME, ENV.DBUSER, ENV.DBPASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

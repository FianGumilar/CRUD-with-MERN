const { Sequelize } = require('sequelize'); 

const db = new Sequelize('crud_db', 'root', '', {
    hostname: 'localhost',
    dialect: 'mysql'
});

module.exports = db;
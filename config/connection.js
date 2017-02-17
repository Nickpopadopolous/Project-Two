// packages

var Sequelize = require('sequelize');

// creates a sequilize object

var sequelize = new Sequelize('leaderboard', 'root', '', {

	host: 'localhost',
	dialect: 'mysql'

});

module.exports = sequelize;
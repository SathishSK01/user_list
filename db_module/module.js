const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');
var app = require('/home/sathish/Desktop/room_project/app')

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/home/sathish/Desktop/user_list/database.db',
});

const userDetails = sequelize.define('vechicaldetails', {
  name        : { type: DataTypes.STRING },
  age         : { type: DataTypes.INTEGER }
});

sequelize.sync();
module.exports = userDetails;

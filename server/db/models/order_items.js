const { Sequelize } = require('sequelize');
const db = require('../database');

const OrderItems = db.define("orderItems", {
  quantity:Sequelize.INTEGER,
  subtotal: Sequelize.FLOAT

})

module.exports= OrderItems

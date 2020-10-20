const { Sequelize } = require('sequelize');
const db = require('../database');

const OrderItems = db.define("orderItems", {
  quantity:Sequelize.INTEGER,
  subtotal: Sequelize.FLOAT

})

//add a hook so that subtotal updates whenever the product price updates UNLESS the order is already submitted

module.exports= OrderItems

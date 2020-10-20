const db = require('./database');
const Addresses = require('./models/addresses')
const OrderItems = require('./models/order_items')
const Orders = require('./models/orders')
const Products = require('./models/products')
const Reviews = require('./models/reviews')
const Sessions = require('./models/sessions')
const Users = require('./models/users')

Users.hasMany(Sessions);
Users.hasMany(Orders);
Users.hasMany(Reviews);
Users.hasMany(Addresses);
Addresses.hasMany(Orders);
Products.hasMany(Reviews);
Orders.hasMany(OrderItems);
OrderItems.belongsTo(Products);

module.exports= {
  db,
  Addresses,
  OrderItems,
  Orders,
  Products,
  Reviews,
  Sessions,
  Users
}

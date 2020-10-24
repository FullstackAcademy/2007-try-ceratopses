const db = require('./database');
const Addresses = require('./models/addresses')
const OrderItems = require('./models/orderItems')
const Orders = require('./models/orders')
const Products = require('./models/products')
const Reviews = require('./models/reviews')
const Sessions = require('./models/sessions')
const Users = require('./models/users')

Users.hasMany(Sessions);
Sessions.belongsTo(Users);

Users.hasMany(Orders);
Orders.belongsTo(Users);

Users.hasMany(Reviews);
Reviews.belongsTo(Users);

Users.hasMany(Addresses);
Addresses.belongsTo(Users)

Addresses.hasMany(Orders);
Orders.belongsTo(Addresses);

Products.hasMany(Reviews);
Reviews.belongsTo(Products);

Orders.hasMany(OrderItems);
OrderItems.belongsTo(Orders);

Products.hasMany(OrderItems);
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

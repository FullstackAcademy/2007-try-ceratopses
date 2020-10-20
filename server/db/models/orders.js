const { Sequelize } = require("sequelize");
const db = require("../database");

const Orders = db.define("orders", {
  status: {
    type: Sequelize.ENUM({
      values: ["inCart, Created, Processing, Canceled, Completed"],
    }),
    allowNull: false,
  },
  sales_tax: Sequelize.FLOAT,
  shipping: Sequelize.FLOAT,
  grand_total: Sequelize.FLOAT,
  ordered_at: Sequelize.DATE,
});

module.exports=Orders

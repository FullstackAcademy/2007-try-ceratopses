const { Sequelize } = require("sequelize");
const db = require("../database");

const Orders = db.define("orders", {
  status: {
    type: Sequelize.ENUM({
      values: ["inCart", "created", "processing", "canceled", "completed"],
    }),
    allowNull: false,
  },
  salesTax: Sequelize.FLOAT,
  shipping: Sequelize.FLOAT,
  grandTotal: Sequelize.FLOAT,
  orderedAt: Sequelize.DATE,
});

//either make grandTotal a virtual field that queries orderItems or add a hook so that it gets updated whenever the subtotals in orderItems is updated

module.exports=Orders

const { Sequelize } = require("sequelize");
const db = require("../database");

const Products = db.define("products", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photoUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "https://pbs.twimg.com/media/Co4RvbeXEAAOSbC.jpg",
  },
  price: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  category: Sequelize.ENUM({
    values: [
      "accessory",
      "flower",
      "indoor",
      "tree",
      "bush",
      "fern",
      "succulent",
      "vines",
    ],
  }),
  tags: Sequelize.STRING,
  lightRequirement: Sequelize.ENUM({
    values: ["full sun", "bright light", "partial shade", "shade", "na"],
  }),
  description: Sequelize.TEXT,
  inventory: {
  type:Sequelize.INTEGER,
  defaultValue:1
  }
});

module.exports = Products;

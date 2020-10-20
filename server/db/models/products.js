const { Sequelize } = require("sequelize");
const db = require("../database");

const Products = db.define("products", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  photo_url: {
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
      "bouquet",
      "indoor",
      "tree",
      "bush",
      "fern",
      "succulent",
      "vines",
    ],
  }),
  tags: Sequelize.STRING,
  light_requirement: Sequelize.ENUM({
    values: ["full sun", "bright light", "partial shade", "shade"],
  }),
  description: Sequelize.TEXT,
  inventory: Sequelize.INTEGER,
});

module.exports = Products;

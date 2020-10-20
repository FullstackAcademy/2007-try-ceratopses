const { Sequelize } = require("sequelize");
const db = require("../database");

const Reviews = db.define({
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  fullReviews: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: [5, 5000],
    },
  },
});

module.exports = Reviews;

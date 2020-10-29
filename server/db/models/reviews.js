const { Sequelize } = require("sequelize");
const db = require("../database");

const Reviews = db.define('reviews', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  reviewTitle: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  fullReview: {
    type: Sequelize.TEXT,
    allowNull: true,
    validate: {
      len: [5, 5000],
    },
  },
});

module.exports = Reviews;

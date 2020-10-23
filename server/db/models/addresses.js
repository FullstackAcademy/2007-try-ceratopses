const { Sequelize } = require("sequelize");
const db = require("../database");

const Addresses = db.define("addresses", {
  preferred: Sequelize.BOOLEAN,
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  buildingNumber: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  unitNumber: Sequelize.STRING,
  street: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports=Addresses

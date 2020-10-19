const { Sequelize } = require("sequelize");
const db = require("../database");

const Sessions = db.define("sessions", {
  sid: {
    type: Sequelize.UUID,
    allowNull: false,
  },
});

module.exports=Sessions

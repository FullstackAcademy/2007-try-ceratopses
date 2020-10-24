const { Sequelize } = require('sequelize');
const { validate } = require('../database');
const db = require('../database');

const Users = db.define("users", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique:true,
    validate:{
      isEmail:true,
    }
  },
  hashedPassword: Sequelize.STRING,
  guest: {
    type: Sequelize.BOOLEAN,
  },
  admin: {
    type:Sequelize.BOOLEAN,
    defaultValue:false
  }
}, {
  validate:{
  guestOrRegistered: function(){
    if(!this.guest && (!this.email || !this.hashedPassword)) {
      throw new Error ("Email and password cannot be null if not a guest")
    }
  }
}
})

module.exports= Users

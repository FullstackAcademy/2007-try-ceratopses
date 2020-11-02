const { Sequelize } = require('sequelize');
const db = require('../database');

const Users = db.define("users", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: {
    type: Sequelize.STRING,
    unique:true,
    allowNull:true,
    validate:{
      isEmail:true,
      notEmpty:true,
      nullOnlyForGuests(value){
        if(value===null && !this.guest) {
          throw new Error ("Email cannot be null if not a guest")
        }
      }
    }
  },
  hashedPassword: {
    type:Sequelize.STRING,
    allowNull:true,
    validate:{
      notEmpty:true,
      nullOnlyForGuests(value){
        if(value===null && !this.guest) {
          throw new Error ("Password cannot be null if not a guest")
        }
      }
    }
  },
  guest: {
    type: Sequelize.BOOLEAN,
  },
  admin: {
    type:Sequelize.BOOLEAN,
    defaultValue:false
  }
})

module.exports= Users

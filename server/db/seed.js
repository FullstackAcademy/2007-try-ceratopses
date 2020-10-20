const {db, Users} = require('./index')

const seed = async() =>{
  try {
  await db.sync({force:true})
   await Users.create({
      firstName:"John",
      email:"test@test.com",
      hashedPassword:"1234"
    })
    console.log("seeded users!")
  } catch (error) {
    console.log("ERROR",error)
  }

}

seed();

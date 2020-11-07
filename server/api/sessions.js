const router = require('express').Router()
const {Sessions, Users} = require('../db/index')

router.get('/', async(req, res, next) => { // api/sessions
  try {
    res.send(await Sessions.findAll(
      {
        include: [Users]
      }
    ));
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:username', async(req,res,next) => {
  try {
    console.log(req.body.username)
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/login', async(req, res, next) => { // api/sessions/login
  try {
    console.log('Login request on route: ',req.body);
    const {email, password} = req.body
    let user = await Users.findOne(
      {
        where: {
          email,
          hashedPassword: password
        },
        include: { all: true, nested: true }, //this includes data from the associated tables but currently goes too deep. ie. it includes product reviews from other users. user > reviews > products > other reviews of that product
      attributes: { exclude: ["hashedPassword"] }
      }
    )

    if (!user) {
      res.sendStatus(401)
    }

    else {
      console.log('Trying to find user and found this user: ', user)
      res.send(user);
    }

  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;



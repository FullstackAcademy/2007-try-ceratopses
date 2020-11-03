const router = require('express').Router()
const {Sessions, Users, Addresses, Orders} = require('../db/index')

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
        include: [
          {
            model: Addresses
          },
          {
            model: Orders
          }
        ]
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



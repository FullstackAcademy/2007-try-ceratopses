const router = require('express').Router()
const {Users, Addresses, Orders, Reviews} = require('../db/index')

router.get('/', async(req, res, next) => { // api/users
  try {
    res.send(await Users.findAll());
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:userId', async(req, res, next) => { // single user profile
  try {
    const userProfile = await Users.findOne({
      where: {
        id: req.params.userId
      },
      include: [ Addresses, Orders, Reviews ]
    });
    res.send(userProfile)
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/', async(req,res,next) => { // create a user
  try {
    const newUser = await Users.create(req.body)
    res.status(201).send(newUser)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create a user with an already taken username'
    })
  }
})

module.exports = router;

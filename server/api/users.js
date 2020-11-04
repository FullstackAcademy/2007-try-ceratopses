const router = require('express').Router()
const {Users, Addresses, Orders} = require('../db/index')

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
      include: [
        {
          model: Addresses
        },
        {
          model: Orders
        }
      ]
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

router.put('/:userId', async(req,res,next) => {
  const {firstName, lastName, email, admin} = req.body
  try {
    await Users.update({firstName, lastName, email, admin},{
      where: {
        id: req.params.userId
          }
        }
    )
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:userId', async(req,res,next) => {
  try {
    await Users.destroy({where: {id: req.params.userId}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

})

module.exports = router;

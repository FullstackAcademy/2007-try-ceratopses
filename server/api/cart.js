const router = require('express').Router()
const {Orders, Users, Addresses, OrderItems, Products} = require('../db/index')

router.get('/:userId', async(req, res, next) => { // api/cart
  try {
    //const {userId} = req.body
    let response = (await Orders.findAll({
      where: {
        userId: req.params.userId,
        status: 'inCart'
      },
      include: { all: true, nested: true },
      attributes: { exclude: ["hashedPassword"] }, //don't expose passwords to the client

    }))
    //console.log('response is: ', response.length)
    res.send(response);
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/', async(req, res, next) => {
  try {
    let newCart = await Orders.create(req.body)
    res.status(201).send(newCart)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create a new cart'
    })
  }
})

module.exports = router;

const router = require('express').Router()
const {Products, Users, Addresses, OrderItems} = require('../db/index')

router.get('/', async(req, res, next) => { // api/orderitems
  try {
    res.send(await OrderItems.findAll({
      include: { all: true, nested: true },
    }));
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:orderId', async(req, res, next) => {
  try {
    res.send(await OrderItems.findAll({
      where: {
        orderId: req.params.orderId
      },
      include: [Products]
    }));
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/', async(req, res, next) => {
  try {
    let newProductInCart = await OrderItems.create(req.body) // orderId, productId, quantity, subtotal
    res.status(201).send(newProductInCart)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create a new cart'
    })
  }
})

router.put('/:orderId', async(req, res, next) => {
  try {
    let updatedProductInCart = await OrderItems.update(req.body, {
      where: {
        orderId: req.body.orderId,
        productId: req.body.productId
      }
    }) // orderId, productId, quantity, subtotal
    res.status(201).send(updatedProductInCart)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create a new cart'
    })
  }
})

module.exports = router;

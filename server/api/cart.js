const router = require('express').Router()
const {Orders, Users, Addresses, OrderItems, Products} = require('../db/index')

router.get('/', async(req, res, next) => { // api/cart
  try {
    const {userId} = req.body
    res.send(await Orders.findAll({
      where: {
        userId,
        status: 'inCart'
      },
      include: { all: true, nested: true },
      attributes: { exclude: ["hashedPassword"] }, //don't expose passwords to the client

    }));
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

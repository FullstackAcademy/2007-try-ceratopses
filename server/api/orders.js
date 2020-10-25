const router = require('express').Router()
const {Orders, Users, Addresses, OrderItems} = require('../db/index')

router.get('/', async(req, res, next) => { // api/orders
  try {
    res.send(await Orders.findAll({
      include: [Users, Addresses, OrderItems]
    }));
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

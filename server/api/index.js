const router = require('express').Router();

router.use('/products', require('./products')) // api/products route
router.use('/orders', require('./orders')) // api/orders route
router.use('/users', require('./users')) // api/users route
router.use('/sessions', require('./sessions')) // api/sessions
router.use('/checkout', require('./checkout')) // api/checkout

router.use((req, res, next) => { //api
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router

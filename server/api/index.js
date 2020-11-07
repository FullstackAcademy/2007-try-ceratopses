const router = require('express').Router();

router.use('/products', require('./products')) // api/products route
router.use('/admin', require('./admin')) // api/admin, which will then require admin versions of products, orders, users, sessions. they might be able to be the same version as the regular routes?
router.use('/orders', require('./orders')) // api/orders route
router.use('/users', require('./users')) // api/users route
router.use('/sessions', require('./sessions')) // api/sessions
router.use('/cart', require('./cart')) // api/cart
router.use('/checkout', require('./checkout')) // api/checkout
router.use('/reviews', require('./reviews')) // api/cart
router.use('/orderitems', require('./orderItems')) // api/orderitems

router.use((req, res, next) => { //api
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router

const router = require('express').Router();

router.use('/products', require('./products')) // api/products route

router.use((req, res, next) => { //api
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router

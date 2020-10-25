const router = require('express').Router()
const {Products} = require('../db/index')

router.get('/', async(req, res, next) => { // api/products
  try {
    res.send(await Products.findAll());
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

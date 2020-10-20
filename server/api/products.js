const router = require('express').Router()

router.get('/', async(req, res, next) => { // api/products
  try {
    //res.send('hello')
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

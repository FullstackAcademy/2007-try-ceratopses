const router = require('express').Router()


router.get('/', async(req, res, next) => {
  try {
    res.send('Products go here')
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

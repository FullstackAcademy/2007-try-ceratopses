const router = require('express').Router()

router.get('/', async(req, res, next) => {
  try {
    // tbd
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

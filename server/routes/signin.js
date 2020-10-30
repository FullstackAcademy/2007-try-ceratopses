const router = require('express').Router()

router.get('/', async(req, res, next) => {
  try {
    res.send('sign in route goes here')
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

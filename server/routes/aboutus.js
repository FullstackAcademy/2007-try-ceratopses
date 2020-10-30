const router = require('express').Router()

router.get('/', async(req, res, next) => {
  try {
   res.send('About Us')
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

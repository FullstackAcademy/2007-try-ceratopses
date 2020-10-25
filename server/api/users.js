const router = require('express').Router()
const {Users} = require('../db/index')

router.get('/', async(req, res, next) => { // api/users
  try {
    res.send(await Users.findAll());
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

const router = require('express').Router()
const {Sessions, Users} = require('../db/index')

router.get('/', async(req, res, next) => { // api/sessions
  try {
    res.send(await Sessions.findAll(
      {
        include: [Users]
      }
    ));
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

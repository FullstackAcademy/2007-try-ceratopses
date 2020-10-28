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

router.get('/:username', async(req,res,next) => {
  try {
    console.log(req.body.username)
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/login', async(req, res, next) => { // api/sessions/login
  try {
    console.log('Login request on route: ',req.body);
    res.sendStatus(200);
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;



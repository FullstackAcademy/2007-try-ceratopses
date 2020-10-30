const router = require('express').Router();

//@TODO - build out middleware to check if an user is logged in as an admin before granting access to routes
router.use((req,res,next) => {
  const loggedIn=true
  if(loggedIn){
    next()
  } else {
    res.sendStatus(401)
  }
})


router.use('/users', require('./adminUsers')) // api/admin/users route


router.use((req, res, next) => { //api
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router

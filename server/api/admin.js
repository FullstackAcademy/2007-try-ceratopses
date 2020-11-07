const router = require('express').Router();

//@TODO - build out middleware to check if an user is logged in as an admin before granting access to routes.
/// until then you'll have to manually toggle loggedIn
router.use((req,res,next) => {
  console.log("================CHECKING AUTHORIZATION======================")
  const loggedIn=true
  if(loggedIn){
    next()
  } else {
    res.sendStatus(401)
  }
})

router.get('/', (req,res,next) =>{
  res.sendStatus(200)
})


router.use('/users', require('./adminUsers')) // api/admin/users route
router.use('/orders', require('./adminOrders'))
router.use('/products', require('./adminProducts'))

router.use((req, res, next) => { //api
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

module.exports = router

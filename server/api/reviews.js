const router = require('express').Router()
const {Users, Addresses, Orders, Reviews} = require('../db/index')

router.get('/', async(req, res, next) => { // api/reviews
  try {
    res.send(await Reviews.findAll());
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:productId', async(req, res, next) => { // api/reviews/:productId
  try {
    res.send(await Reviews.findAll({
      where: {
        productId: req.params.productId
      }
    }));
  }
  catch (ex) {
    next (ex)
  }
})

router.post('/', async(req,res,next) => { // create a review
  try {
    console.log(req.body)
    const newReview = await Reviews.create(req.body)
    res.status(201).send(newReview)
  }
  catch (ex) {
    res.status(401).send({
      message: 'Cannot create a new review'
    })
  }
})

module.exports = router;

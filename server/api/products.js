const router = require('express').Router()
const { Products, Reviews } = require ('../db/index')

router.get('/', async(req, res, next) => { // api/products
  try {
    const products = await Products.findAll();
    res.send(products)
  }
  catch (ex) {
    next (ex)
  }
})

router.get('/:productId', async(req, res, next) => { // api/products
  try {
    const product = await Products.findOne({
      where: {
        id: req.params.productId
      },
      include: { all: true, nested: true },
    });
    res.send(product)
  }
  catch (ex) {
    next (ex)
  }
})

module.exports = router;

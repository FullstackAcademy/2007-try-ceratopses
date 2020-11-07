const router = require("express").Router();
const { Products } = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post('/', async(req,res,next) => {
  try {
    req.body.category = req.body.category.split(",")
    req.body.tags = req.body.tags.split(",")
    const newProduct = await Products.create(req.body)
    res.json(newProduct)
  } catch (error) {
    console.log(error)
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Products.findOne({
      where: {
        id: req.params.productId
          },
      include: { all: true, nested: true }, //this includes data from the associated tables but currently goes too deep. ie. it includes product reviews from other users. user > reviews > products > other reviews of that product
    });

    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.put('/:productId', async(req,res,next) => {
  try {
    await Products.update(req.body,{
      where: {
        id: req.params.productId
          }
        }
    )
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
});

router.delete('/:productId', async(req,res,next) => {
  try {
    await Products.destroy({where: {id: req.params.productId}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
});

module.exports = router;

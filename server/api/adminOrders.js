const router = require("express").Router();
const { Addresses, Orders } = require("../db");


router.get("/", async (req, res, next) => {
  try {
    const users = await Orders.findAll({include:Addresses});

    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/:orderId", async (req, res, next) => {
  try {
    const user = await Orders.findOne({
      where: {
        id: req.params.orderId
          },
      include: { all: true, nested: true }
    });

    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:orderId', async(req,res,next) => {
console.log("=========status",req.body)
  try {
    await Orders.update(req.body,{
      where: {
        id: req.params.orderId
          }
        }
    )
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:orderId', async(req,res,next) => {
  try {
    await Orders.destroy({where: {id: req.params.orderId}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

})
module.exports = router;

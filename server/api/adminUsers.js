const router = require("express").Router();
const { Users, Orders,Reviews, Products, Addresses} = require("../db");
const Op = require("sequelize").Op;

router.get("/", async (req, res, next) => {
  try {
    const users = await Users.findAll({
      where: {
        guest: {
          [Op.or]: [false, null],
        },
      },
      include: Orders,
      attributes: { exclude: ["hashedPassword"] }, //don't expose passwords to the client
    });

    res.json(users);
  } catch (error) {
    next(error);
  }
});

router.post('/', async(req,res,next) => {
  const {firstName, lastName, password, email, admin} = req.body
  try {
    const newUser = await Users.create({firstName,lastName,email,admin, hashedPassword:password})
    res.json(newUser)
  } catch (error) {
    console.log(error)
  }



})
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await Users.findOne({
      where: {
        id: req.params.userId
          },
      include: { all: true, nested: true }, //this includes data from the associated tables but currently goes too deep. ie. it includes product reviews from other users. user > reviews > products > other reviews of that product
      attributes: { exclude: ["hashedPassword"] }, //don't expose passwords to the client
    });

    res.json(user);
  } catch (error) {
    next(error);
  }
});

router.put('/:userId', async(req,res,next) => {
  const {firstName, lastName, email, admin} = req.body
  try {
    await Users.update({firstName, lastName, email, admin},{
      where: {
        id: req.params.userId
          }
        }
    )
    res.sendStatus(200);
  } catch (error) {
    console.log(error)
  }
})

router.delete('/:userId', async(req,res,next) => {
  try {
    await Users.destroy({where: {id: req.params.userId}})
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }

})
module.exports = router;

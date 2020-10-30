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

module.exports = router;

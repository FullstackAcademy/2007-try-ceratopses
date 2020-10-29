const router = require("express").Router();
const { Users, Orders} = require("../db");
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

module.exports = router;

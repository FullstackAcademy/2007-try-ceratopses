const router = require('express').Router();
const { Orders, OrderItems, Products } = require('../db/index');

router.get('/', async (req, res, next) => {
  // api/cart
  try {
    const { userId } = req.body;
    res.send(
      await Orders.findAll({
        where: {
          userId,
          status: 'inCart',
        },
        include: { all: true, nested: true },
        attributes: { exclude: ['hashedPassword'] }, //don't expose passwords to the client
      })
    );
  } catch (ex) {
    next(ex);
  }
});

router.get('/:productId', async (req, res, next) => {
  try {
    const { userId } = req.body;
    const cart = await Orders.findOne({
      where: {
        userId,
        status: 'inCart',
      },
      include: [Product],
      include: { all: true, nested: true },
      attributes: { exclude: ['hashedPassword'] },
    });
    res.send(cart);
  } catch (ex) {
    next(ex);
  }
});

router.put('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const cart = await Orders.findOne({
      where: {
        productId,
        quantity,
        status: 'inCart',
      },
      include: [Product],
      include: { all: true, nested: true },
      attributes: { exclude: ['hashedPassword'] },
    });
    res.send(cart);
  } catch (ex) {
    next(ex);
  }
});

router.post('/:userId/:productId', async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const productId = req.params.productId;
    const cart = await Orders.findByPk(productId, {
      where: {
        status: 'inCart',
      },
      include: [Product],
      include: { all: true, nested: true },
      attributes: { exclude: ['hashedPassword'] },
    });

    const gotItem = await OrderItems.findOne({
      where: {
        orderId,
        productId,
      },
      include: { all: true, nested: true },
      attributes: { exclude: ['hashedPassword'] },
    });
    if (!gotItem) {
      await OrderItems.create({
        orderId,
        productId,
        quantity: 1,
      });
    } else {
      gotItem.quantity += 1;
      await gotItem.save();
    }
    res.send(cart);
  } catch (ex) {
    next(ex);
  }
});

router.delete('/:productId', async (req, res, next) => {
  try {
    const productId = req.params.productId;
    const cart = await Orders.findByPk(productId, {
      where: {
        status: 'inCart',
      },
      include: [Product],
      include: { all: true, nested: true },
      attributes: { exclude: ['hashedPassword'] },
    });
    await cart.destroy();
    res.sendStatus(204);
  } catch (ex) {
    next(ex);
  }
});

module.exports = router;

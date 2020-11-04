const router = require('express').Router()
const {Orders, Users, Addresses, OrderItems} = require('../db/index')

const stripe = require('stripe')('sk_test_51HinadGDMs0I77f8uUsc1EqBslpdhK5rZVMAB5Ed5BxLtkVOpJqNqc1yn3tCZeYHpzua3QOJqDxQiDEGkz0wd5Gl00P5AjaKte')

// /api/checkout/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {

    console.log(req.body)
    let cartItems = await Orders.findAll({
        where: {
          userId,
          status: 'inCart'
        },
        include: { all: true, nested: true },
        attributes: { exclude: ["hashedPassword"] }, //don't expose passwords to the client
    });
    console.log(cartItems)

    const checkoutItems = cartItems.map(item => {
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.title, //may need to update to correspond to data info
                },
                unit_amount: item.price * 100, //may need to update to correspond to data info
            },
            quantity: item.quantity, //may need to update to correspond to data info
        }
    })

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
    //   line_items: checkoutItems, replace lines 36-47 once the above has been tested
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://example.com/success',
      cancel_url: 'http://localhost:3000',
    });
  
    res.json({ id: session.id });
  });

module.exports = router;

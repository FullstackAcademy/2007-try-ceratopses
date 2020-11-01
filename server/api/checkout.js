const router = require('express').Router()
const {Orders, Users, Addresses, OrderItems} = require('../db/index')

const stripe = require('stripe')('sk_test_51HinadGDMs0I77f8uUsc1EqBslpdhK5rZVMAB5Ed5BxLtkVOpJqNqc1yn3tCZeYHpzua3QOJqDxQiDEGkz0wd5Gl00P5AjaKte')


// /api/checkout/create-checkout-session
router.post('/create-checkout-session', async (req, res) => {
    console.log(req.body)
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
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

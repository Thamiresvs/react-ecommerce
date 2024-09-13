const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

router.post('/', async (req, res) => {
  const { items, token } = req.body;

  const amount = items.reduce((total, item) => total + item.price * item.quantity, 0);

  try {
    const charge = await stripe.charges.create({
      amount,
      currency: 'usd',
      source: token.id,
      description: 'E-commerce payment'
    });

    res.json({ success: true, charge });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

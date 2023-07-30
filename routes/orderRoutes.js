const express = require('express');
const router = express.Router();
const Order = require('../models/order');


router.post('/', async (req, res) => {
  try {
    const { restaurantId, items, totalAmount, customerName, deliveryAddress, contactNumber } = req.body;
    const order = new Order({ restaurantId, items, totalAmount, customerName, deliveryAddress, contactNumber });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: 'Error placing order' });
  }
});


router.get('/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const orders = await Order.find({ restaurantId }).populate('items');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching orders' });
  }
});

module.exports = router;

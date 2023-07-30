const express = require('express');
const router = express.Router();
const Menu = require('../models/menu');

router.post('/', async (req, res) => {
  try {
    const { restaurantId, name, price } = req.body;
    const menu = new Menu({ restaurantId, name, price });
    await menu.save();
    res.status(201).json(menu);
  } catch (err) {
    res.status(500).json({ error: 'Error creating menu item' });
  }
});

router.get('/:restaurantId', async (req, res) => {
  try {
    const { restaurantId } = req.params;
    const menuItems = await Menu.find({ restaurantId });
    res.json(menuItems);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching menu items' });
  }
});

module.exports = router;

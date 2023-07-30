// routes/restaurantRoutes.js
const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

// Create a new restaurant
// router.post('/', async (req, res) => {
//   try {
//     const { name, location, cuisine } = req.body;
//     const restaurant = new Restaurant({ name, location, cuisine });
//     await restaurant.save();
//     res.status(201).json(restaurant);
//   } catch (err) {
//     res.status(500).json({ error: 'Error creating restaurant' });
//   }
// });

router.post('/', async (req, res) => {
    try {
      const restaurant = new Restaurant({ name: 'Test Restaurant', location: 'Test Location', cuisine: 'Test Cuisine' });
      await restaurant.save();
      res.status(201).json(restaurant);
    } catch (err) {
      console.error('Error creating restaurant:', err);
      res.status(500).json({ error: 'Error creating restaurant' });
    }
  });
  

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching restaurants' });
  }
});

module.exports = router;

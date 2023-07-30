const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Menu', required: true }],
  totalAmount: { type: Number, required: true },
  customerName: { type: String, required: true },
  deliveryAddress: { type: String, required: true },
  contactNumber: { type: String, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;

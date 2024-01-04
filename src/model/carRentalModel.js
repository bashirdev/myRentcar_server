const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carModel: {
    type: String,
    required: true,
  },
  UserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  carTakingDate: {
    type: Date,
    required: true,
  },
  carReturningDate: {
    type: Date,
    required: true,
  },
  rentalType: {
    type: String,
    enum: ['monthly', 'perday'],
    required: true,
  },
  pricingDetails: {
    perDayPrice: {
      type: Number,
      default: null,
    },
    monthlyPrice: {
      type: Number,
      default: null,
    },
  },
});

const Rental = mongoose.model('Rental', rentalSchema);

module.exports = Rental;

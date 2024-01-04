const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  id: String,
  ratingNum: Number,
  carName: String,
  carModel: String,
  engineCC: Number,
  perDayPrice: Number,
  year: Number,
  fuelType: String,
  transmissionType: String,
  seatingCapacity: Number,
  mileage: Number,
  features: [String],
  imageURLs: [String],
  location: String,
  availabilityStatus: Boolean,
  insuranceInfo: {
    provider: String,
    coverageType: String,
  },
  owner: {
    name: String,
    contact: String,
  },
  bookings: [
    {
      bookingDate: Date,
      returnDate: Date,
      reviews: [
        {
          username: String,
          rating: Number,
          comment: String,
        },
      ],
    },
  ],
});

const Car = mongoose.model('Car', carSchema);

module.exports = Car;

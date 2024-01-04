const Rental = require("../model/carRentalModel")


// Create a new rental
exports.orderCreateRentalCar = async (req, res) => {
  try {
    const rental = new Rental(req.body);
    await rental.save();
    res.status(201).json(rental);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all rentals
exports.getAllRentalCar=async (req, res) => {
  try {
    const rentals = await Rental.find();
    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific rental by ID
exports.getRentalCarById= async (req, res) => {
   console.log(req.params.id)
  try {
    const rental = await Rental.findById({_id:req.params.id});
    // if (!rental) {
    //   return res.status(404).json({ error: 'Rental not found' });
    // }
    res.status(200).json({status:'Success', data:rental});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a rental by ID
exports.updateRentalCar= async (req, res) => {
  try {
    const rental = await Rental.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rental) {
      return res.status(404).json({ error: 'Rental not found' });
    }
    res.status(200).json(rental);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a rental by ID
exports.Rentaldelete=('/:id/delete', async (req, res) => {
  try {
    const rental = await Rental.findByIdAndDelete(req.params.id);
    if (!rental) {
      return res.status(404).json({ error: 'Rental not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



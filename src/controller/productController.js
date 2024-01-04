// product.controller.js
const Car = require('../model/productModel');


// Create a new product
exports.createProduct = async (req, res) => {
    console.log(req.body)
  try {
    const product = new Car(req.body);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: 'Product creation failed' });
  }
};

// Retrieve all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Car.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Retrieve a single product by ID
exports.getProductById = async (req, res) => {
    console.log(req.params.id)
  try {
    const product = await Car.findById({_id:req.params.id});
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Car.findByIdAndUpdate(
      req.params.productId,
      req.body,
      { new: true }
    );
    if (!updatedProduct) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Car.findByIdAndRemove(req.params.productId);
    if (!product) {
      res.status(404).json({ error: 'Product not found' });
    } else {
      res.status(204).json();
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

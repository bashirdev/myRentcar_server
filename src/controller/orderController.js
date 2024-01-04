const Order = require("../model/orderModel");




exports.createOrder=async (req, res) => {
    try {
      const orderData = req.body;
      console.log(orderData)
      const order =await new Order(orderData);
      await order.save();
      res.status(201).json({status:'Success', data:order});
    } catch (error) {
      res.status(400).json({ error: 'Order creation failed' });
    }
  }




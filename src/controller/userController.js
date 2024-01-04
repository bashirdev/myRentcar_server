// user.routes.js

const jwt = require('jsonwebtoken');
const User = require('../model/userModel');





exports.CreateUser=async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    const user = new User({ userEmail, password });
    await user.save();
    res.status(201).json({ message: 'User created successfully', user:user });
  } catch (error) {
    res.status(400).json({ error: 'User registration failed' });
  }
};

exports.userLogin= async (req, res) => {
  try {
    const { userEmail, password } = req.body;
    const user = await User.findOne({ userEmail });
   const {userEmail:email, isAdmin} =user
    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key');
    res.status(200).json({ token, email, isAdmin, userId:user._id});
  } catch (error) {
    res.status(400).json({ error: 'Login failed' });
  }
};



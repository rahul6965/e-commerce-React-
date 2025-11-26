const express = require('express');
const router = express.Router();
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', authMiddleware, logoutUser);
router.get('/profile', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password');
  res.json({ user });
});

module.exports = router;

const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey123';
exports.registerUser = async (req, res) => {
try {
const { name, email, password } = req.body;
if (!name || !email || !password) return res.status(400).json({ message: 'All fields required' });


const exist = await User.findOne({ email });
if (exist) return res.status(400).json({ message: 'Email already registered' });


const hashed = await bcrypt.hash(password, 10);
const user = await User.create({ name, email, password: hashed });


res.status(201).json({ message: 'Registered', user: { id: user._id, name: user.name, email: user.email } });
} catch (err) {
res.status(500).json({ message: err.message });
}
};


exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate("roleId", "name permissions");
  
  if (!user) return res.status(401).json({ message: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.json({
    message: 'Login successful',
    token,
    user: {
      id: user._id,
      name: user.name,
      email: user.email,

      // FIXED HERE
      role: user.roleId?.name || null,
      roleId: user.roleId?._id || null,
      permissions: user.roleId?.permissions || []
    }
  });
};





exports.logoutUser = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(400).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.decode(token);
    if (!decoded?.exp) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const expiresAt = new Date(decoded.exp * 1000);

    await BlacklistedToken.findOneAndUpdate(
      { token },
      { token, expiresAt },
      { upsert: true, new: true }
    );

    res.json({ message: 'Logout successful' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

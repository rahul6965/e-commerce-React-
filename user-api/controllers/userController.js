const User = require('../models/User');
const Role = require('../models/Role'); 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
exports.getAllUsers = async (req, res) => {
try {
const users = await User.find().select('-password').sort({ createdAt: -1 });
res.json(users);
} catch (err) {
res.status(500).json({ message: err.message });
}
};


exports.getUserById = async (req, res) => {
try {
const user = await User.findById(req.params.id).select('-password');
if (!user) return res.status(404).json({ message: 'Not found' });
res.json(user);
} catch (err) {
res.status(400).json({ message: 'Invalid ID' });
}
};

// ✅ Create User (with role assignment)
exports.createUser = async (req, res) => {
  try {
    const { name, email, password, roleId } = req.body;

    if (!name || !email || !password || !roleId) {
      return res.status(400).json({ message: 'All fields required' });
    }

    const role = await Role.findById(roleId);
    if (!role) return res.status(400).json({ message: 'Invalid roleId' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      roleId,
    });

    res.status(201).json({
      message: 'User created successfully',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: role.name
      },
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.updateUser = async (req, res) => {
try {
const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).select('-password');
if (!user) return res.status(404).json({ message: 'Not found' });
res.json(user);
} catch (err) {
res.status(400).json({ message: err.message });
}
};


exports.deleteUser = async (req, res) => {
try {
await User.findByIdAndDelete(req.params.id);
res.json({ message: 'Deleted' });
} catch (err) {
res.status(400).json({ message: err.message });
}
};
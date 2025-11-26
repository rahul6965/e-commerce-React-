const Role = require('../models/Role');

// ✅ Create Role
exports.createRole = async (req, res) => {
  try {
    const { name, permissions } = req.body;
    const existingRole = await Role.findOne({ name });
    if (existingRole) return res.status(400).json({ message: 'Role already exists' });

    const role = new Role({ name, permissions });
    await role.save();
    res.status(201).json({ message: 'Role created successfully', role });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Get All Roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.json(roles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Role by ID
exports.getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json(role);
  } catch (error) {
    res.status(400).json({ message: 'Invalid Role ID' });
  }
};

// ✅ Update Role
exports.updateRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json({ message: 'Role updated successfully', role });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ✅ Delete Role
exports.deleteRole = async (req, res) => {
  try {
    const role = await Role.findByIdAndDelete(req.params.id);
    if (!role) return res.status(404).json({ message: 'Role not found' });
    res.json({ message: 'Role deleted successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

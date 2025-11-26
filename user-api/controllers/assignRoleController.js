const User = require('../models/User');
const Role = require('../models/Role');

// ✅ Assign Role to User
exports.assignRoleToUser = async (req, res) => {
  try {
    const { userId, roleId } = req.body;

    if (!userId || !roleId) {
      return res.status(400).json({ message: 'User ID and Role ID required' });
    }

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const role = await Role.findById(roleId);
    if (!role) return res.status(404).json({ message: 'Role not found' });

    user.roleId = roleId;
    await user.save({ validateBeforeSave: false }); // ✅ Validation skip karega

    res.json({
      message: `Role '${role.name}' assigned to user '${user.name}' successfully`,
      user: { id: user._id, name: user.name, role: role.name }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

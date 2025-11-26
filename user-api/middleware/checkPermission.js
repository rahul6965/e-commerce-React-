const User = require('../models/User');
const Role = require('../models/Role');

// ✅ Middleware for Role Authorization
exports.authorizeRoles = (...allowedRoles) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate('roleId');
      if (!user) return res.status(404).json({ message: 'User not found' });

      const userRole = user.roleId?.name;
      if (!allowedRoles.includes(userRole)) {
        return res.status(403).json({ message: 'Access denied: Unauthorized role' });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

// ✅ Middleware for Permission Check
exports.checkPermission = (requiredPermission) => {
  return async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id).populate('roleId');

      if (!user) return res.status(404).json({ message: 'User not found' });

      const role = user.roleId;
      if (!role) return res.status(403).json({ message: 'Role not assigned' });

      // Permission check
      if (!role.permissions.includes(requiredPermission)) {
        return res.status(403).json({
          message: `Access denied: Missing permission (${requiredPermission})`
        });
      }

      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

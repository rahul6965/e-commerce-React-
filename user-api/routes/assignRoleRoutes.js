const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const { authorizeRoles } = require('../middleware/checkPermission');
const { assignRoleToUser } = require('../controllers/assignRoleController');

// ✅ Only Admin can assign roles
router.post('/', authMiddleware, authorizeRoles('Admin'), assignRoleToUser);

module.exports = router;

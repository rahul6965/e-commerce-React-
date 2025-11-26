const express = require('express');
const router = express.Router();
const { createCategory, getCategories, getCategoryTree } = require('../controllers/categoryController');
const authMiddleware = require('../middleware/authMiddleware');

// Create category (protected)
router.post('/', authMiddleware, createCategory);

// Get all
router.get('/', getCategories);

// Get parent + children
router.get('/:id/tree', getCategoryTree);

module.exports = router;

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/authMiddleware');
const { checkPermission } = require('../middleware/checkPermission');
const upload = require('../middleware/uploadMiddleware');

// ✅ Create product (requires 'create_product')
router.post(
  '/',
  authMiddleware,
  checkPermission('create_product'),
  upload.array('images', 5),
  productController.createProduct
);

// ✅ Get all products (public)
router.get('/', productController.getProducts);

// ✅ Get single product (public)
router.get('/:id', productController.getProductById);

// ✅ Update product (requires 'edit_product')
router.put(
  '/:id',
  authMiddleware,
  checkPermission('edit_product'),
  upload.array('images', 5),
  productController.updateProduct
);

// ✅ Delete product (requires 'delete_product')
router.delete(
  '/:id',
  authMiddleware,
  checkPermission('delete_product'),
  productController.deleteProduct
);

module.exports = router;

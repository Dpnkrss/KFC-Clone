const express = require('express');
const router = express.Router();
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');

router.route('/product/new').post(createProduct);
router.route('/products').get(getAllProducts);
router.route('/product/:id').get(getProductById);
router.route('/product/update/:id').put(updateProduct);
router.route('/product/delete/:id').delete(deleteProduct);

module.exports = router;

const Product = require('../models/productSchema');
const cloudinary = require('cloudinary').v2;
exports.createProduct = async (req, res, next) => {
  const body = req.body;
  const productImage = body.productImage;

  const result = await cloudinary.uploader.upload(productImage, {
    folder: 'kfc',
  });

  body.productImage = result.secure_url;

  console.log(body);

  try {
    await Product.create(body);
    const products = await Product.find({});
    res.json({
      status: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};
exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Product.find({});

    res.json({
      status: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

exports.getProductById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id);
    res.json({
      status: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateProduct = async (req, res, next) => {
  const id = req.params.id;
  const body = req.body;
  try {
    await Product.findByIdAndUpdate(id, body);
    res.json({
      status: true,
      message: 'success',
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Product.deleteOne({ _id: id });
    res.json({
      status: true,
      message: 'Product has been removed',
    });
  } catch (error) {
    console.log(error);

    next(error);
  }
};

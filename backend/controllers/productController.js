exports.createProduct = (req, res, next) => {
  const body = req.body;
  res.json({
    message: 'Success',
    body,
  });
};

exports.getAllProducts = (req, res, next) => {
  res.json({
    message: 'Success',
  });
};

exports.getProductByProduct = (req, res, next) => {
  res.json({
    message: 'Success',
  });
};

exports.updateProduct = (req, res, next) => {
  res.json({
    message: 'Success',
  });
};

exports.deleteProduct = (req, res, next) => {
  res.json({
    message: 'Success',
  });
};

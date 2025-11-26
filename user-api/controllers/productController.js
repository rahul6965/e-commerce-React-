const Product = require('../models/Product');
const fs = require('fs');
const path = require('path');

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category', 'name');
    // discountPrice is already calculated in schema
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const p = await Product.findById(req.params.id).populate('category', 'name');
    if (!p) return res.status(404).json({ message: 'Not found' });
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { title, description, price, quantity, category, percentagePrice, metadata } = req.body;

    const images = (req.files && req.files.map(f => '/uploads/' + f.filename)) || [];
    const slug = title.toLowerCase().replace(/\s+/g, '-');

    const product = await Product.create({
      title,
      slug,
      description,
      price: Number(price),
      percentagePrice: Number(percentagePrice || 0),
      quantity: Number(quantity || 0),
      category,
      images,
      metadata: metadata || {} // ✅ insert metadata here
    });

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};




exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: 'Not found' });

    // Update all fields including metadata
    Object.assign(product, {
      ...req.body,
      metadata: req.body.metadata || product.metadata // keep old metadata if not provided
    });

    // Append new images if uploaded
    if (req.files && req.files.length) {
      const files = req.files.map(f => '/uploads/' + f.filename);
      product.images = product.images.concat(files);
    }

    await product.save(); // discountPrice auto-calculated
    res.json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    const prod = await Product.findByIdAndDelete(req.params.id);
    if (!prod) return res.status(404).json({ message: 'Not found' });

    // optionally delete files from disk
    prod.images.forEach(imgPath => {
      const full = path.join(__dirname, '..', imgPath);
      if (fs.existsSync(full)) fs.unlinkSync(full);
    });

    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

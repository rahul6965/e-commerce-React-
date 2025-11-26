const Category = require('../models/Category');

// Create category (parent can be optional)
exports.createCategory = async (req, res) => {
  try {
    const { name, parent } = req.body;
    const slug = name.toLowerCase().replace(/\s+/g, '-');
    const category = await Category.create({ name, slug, parent: parent || null });
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all categories (with parent populated)
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate('parent', 'name');
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single category with children (optional)
exports.getCategoryTree = async (req, res) => {
  try {
    const parentId = req.params.id;
    // fetch parent
    const parent = await Category.findById(parentId);
    if (!parent) return res.status(404).json({ message: 'Category not found' });

    // fetch children
    const children = await Category.find({ parent: parentId });
    res.json({ parent, children });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

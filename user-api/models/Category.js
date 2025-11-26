const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, unique: true },
  slug: { type: String, trim: true, lowercase: true },
  parent: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null } // parent category (null for root)
}, { timestamps: true });

module.exports = mongoose.model('Category', categorySchema);

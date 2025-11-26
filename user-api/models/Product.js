const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  slug: { type: String, trim: true, lowercase: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountPrice: { type: Number, default: 0 },
  percentagePrice: { type: Number, default: 0 },
  quantity: { type: Number, default: 0 },
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
  images: [{ type: String }],
  featured: { type: Boolean, default: false },
  metadata: { type: Object }
}, { timestamps: true });

// Pre-save hook to calculate discountPrice
productSchema.pre('save', function(next) {
  if (this.percentagePrice > 0) {
    this.discountPrice = this.price - (this.price * this.percentagePrice / 100);
  } else {
    this.discountPrice = this.price;
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);

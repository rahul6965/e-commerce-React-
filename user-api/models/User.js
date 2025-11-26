const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
    age: {
    type: Number,
   default: null
    },
     roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role', // Role model reference
    default: null
  },


  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

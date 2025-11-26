require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const roleRoutes = require('./routes/roleRoutes');
const assignRoleRoutes = require('./routes/assignRoleRoutes');

const app = express(); // ✅ Pehle express initialize

// ✅ Middlewares
app.use(cors());
app.use(express.json()); // JSON body parser middleware

// ✅ Test route
app.get('/', (req, res) => res.send('User API is running'));

// ✅ Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/assign-role', assignRoleRoutes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// ✅ Connect MongoDB
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err.message));

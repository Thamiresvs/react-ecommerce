const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
const productRoutes = require('./routes/productRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

app.use('/api/products', productRoutes);
app.use('/api/checkout', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const mongoose = require('mongoose');
const serverless = require('serverless-http');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ CORS Config
const allowedOrigins = ['https://naukri-campus.vercel.app'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
}));

// ✅ Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const jobRoutes = require('./routes/job');
app.use('/api/jobs', jobRoutes);

// ✅ DB Connect
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// ✅ Export for Vercel (no app.listen!)
module.exports = app;
module.exports.handler = serverless(app);

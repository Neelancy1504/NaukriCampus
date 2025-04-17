const express = require('express');
const mongoose = require('mongoose');
const serverless = require("serverless-http");
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
// app.use(cors());
const allowedOrigins = ['https://naukri-campus.vercel.app'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log(err));

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const jobRoutes = require('./routes/job');
app.use('/api/jobs', jobRoutes);

// Export for Vercel
module.exports.handler = serverless(app);

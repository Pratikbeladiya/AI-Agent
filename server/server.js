require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/db');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

// Connect to MongoDB
connectToDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => res.send('Job Agent API running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
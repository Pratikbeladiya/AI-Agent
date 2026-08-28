const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: String,
  description: { type: String, required: true },
  url: { type: String, required: true, unique: true },
  source: { type: String, enum: ['greenhouse', 'lever', 'remoteok'], required: true },
  postedDate: Date,

  // Filled in by our matching engine (Week 2)
  matchScore: { type: Number, min: 0, max: 100 },
  matchReason: String,

  // Application tracking
  status: {
    type: String,
    enum: ['found', 'scored', 'approved', 'applying', 'applied', 'failed', 'rejected'],
    default: 'found'
  },
  appliedAt: Date,
  screenshotPath: String,

}, { timestamps: true });

module.exports = mongoose.model('Job', jobSchema);
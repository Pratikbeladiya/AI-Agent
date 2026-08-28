const express = require('express');
const router = express.Router();
const Job = require('../model/Job');

// Test route — confirms Job model + DB work together
router.get('/test', async (req, res) => {
  try {
    const count = await Job.countDocuments();
    res.json({ 
      message: 'Job routes working',
       jobCount: count });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/jobs — will return all jobs (real logic added Day 3)
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
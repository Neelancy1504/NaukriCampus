const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const Job = require('../models/Job');

const router = express.Router();

// ✅ Post a new job (Recruiter only)
router.post('/post-job', authMiddleware, roleMiddleware(['recruiter']), async (req, res) => {
  try {
    const { title, company, location, description, salary } = req.body;

    const newJob = new Job({
      title,
      company,
      location,
      description,
      salary,
      postedBy: req.user.id,
    });

    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ Get all jobs
router.get('/my-jobs', async (req, res) => {
  try {
    const jobs = await Job.find().populate('postedBy', 'fullName email');
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;

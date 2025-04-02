const express = require('express');
const Complaint = require('../models/Complaint');

const router = express.Router();

// Submit a complaint
router.post('/', async (req, res) => {
  const { name, email, mobile, address, complaintType, gender, state, complaint } = req.body;

  try {
    // Validate the request body
    if (!name || !email || !mobile || !address || !complaintType || !gender || !state || !complaint) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Create a new complaint document
    const newComplaint = new Complaint({
      name,
      email,
      mobile,
      address,
      complaintType,
      gender,
      state,
      complaint,
    });

    await newComplaint.save();

    res.status(201).json({ message: 'Complaint submitted successfully!' });
  } catch (error) {
    console.error('Error submitting complaint:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get complaints by email
router.get('/user-complaints', async (req, res) => {
  const { email } = req.query;

  try {
    const complaints = await Complaint.find({ email });
    if (!complaints || complaints.length === 0) {
      return res.status(404).json({ error: 'No complaints found for this user' });
    }
    res.status(200).json(complaints);
  } catch (error) {
    console.error('Error fetching complaints:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  complaintType: { type: String, required: true },
  gender: { type: String, required: true },
  state: { type: String, required: true },
  complaint: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, default: 'Pending' },
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
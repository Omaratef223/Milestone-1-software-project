const mongoose = require('mongoose');

const analyticsSchema = new mongoose.Schema({
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  commonIssues: [{ issue: String, count: Number }],
  trends: [{ issue: String, trendData: [/* Data structure for trend analysis */] }],
  // Add other necessary fields related to analytics
});

module.exports = mongoose.model('Analytics', analyticsSchema);

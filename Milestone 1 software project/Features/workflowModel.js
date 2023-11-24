const mongoose = require('mongoose');

const workflowSchema = new mongoose.Schema({
  issueType: { type: String, required: true },
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  steps: [{ type: String }],
  // Add other necessary fields related to workflow
});

module.exports = mongoose.model('Workflow', workflowSchema);

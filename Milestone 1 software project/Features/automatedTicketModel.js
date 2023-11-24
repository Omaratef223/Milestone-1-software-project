const mongoose = require('mongoose');

const automatedTicketSchema = new mongoose.Schema({
  priority: { type: String, required: true },
  assignedAgent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  // Add other necessary fields related to automated ticket routing
});

module.exports = mongoose.model('AutomatedTicket', automatedTicketSchema);

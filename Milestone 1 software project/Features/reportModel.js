const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  manager: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  reportType: { type: String, enum: ['TicketStatus', 'ResolutionTime', 'AgentPerformance'], required: true },
  
  ticketStatusReport: {
    statuses: [
      {
        status: { type: String },
        count: { type: Number }
      }
    ]
  },
  resolutionTimeReport: {
    issues: [
      {
        issueType: { type: String },
        averageTime: { type: Number }
      }
    ]
  },
  agentPerformanceReport: {
    agentMetrics: [
      {
        agent: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        rating: { type: Number },
        
      }
    ]
  }
});

module.exports = mongoose.model('Report', reportSchema);

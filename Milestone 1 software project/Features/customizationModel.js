const mongoose = require('mongoose');

const customizationSchema = new mongoose.Schema({
  administrator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  colors: { type: [String] }, // Example: Array of colors for branding
  // Add other necessary fields related to customization
});

module.exports = mongoose.model('Customization', customizationSchema);

const mongoose = require('mongoose');

const mfaSetupSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  methods: [{ type: String, enum: ['Email', 'SMS', 'AuthenticatorApp'] }], 
  
});

module.exports = mongoose.model('MFASetup', mfaSetupSchema);

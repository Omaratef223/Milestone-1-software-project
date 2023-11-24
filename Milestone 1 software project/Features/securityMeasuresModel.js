const mongoose = require('mongoose');

const securityMeasuresSchema = new mongoose.Schema({
  encryption: { type: Boolean, default: true },
  decryption: { type: Boolean, default: true },
  dataBackup: { type: Boolean, default: true },
 
});

module.exports = mongoose.model('SecurityMeasures', securityMeasuresSchema);

const mongoose = require('mongoose');

const knowledgeBaseSchema = new mongoose.Schema({
  category: { type: String, required: true },
  subCategory: { type: String, required: true },
  solutions: [{ type: String }],

});

module.exports = mongoose.model('KnowledgeBase', knowledgeBaseSchema);
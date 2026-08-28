const mongoose = require('mongoose');

const resumeVersionSchema = new mongoose.Schema({
  originalText: { type: String, required: true },
  tailoredFor: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' }, // null if it's the base resume
  tailoredText: String,
  filePath: String,
}, { timestamps: true });

module.exports = mongoose.model('ResumeVersion', resumeVersionSchema);
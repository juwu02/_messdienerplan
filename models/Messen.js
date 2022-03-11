const mongoose = require('mongoose');

const MessdienerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Bitte den Name eingeben'
  },
  messe1: {
    type: String,
    default: false
  },
  messe2: {
    type: String,
    default: false
  },
  messe3: {
    type: String,
    default: false
  },
  messe4: {
    type: String,
    default: false
  },
  timestamp: { 
    type: Date,
    default: Date.now
  }
})

const Messdiener = mongoose.model('Messdiener', MessdienerSchema);

module.exports = Messdiener;
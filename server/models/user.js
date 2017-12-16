const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Define model
const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowerCase: true,
  },
  password: String,
});

// Create model Class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;

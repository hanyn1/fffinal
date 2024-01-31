const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
 "name":"string"
});

const User = mongoose.model('User', UserSchema, //esm l table 
'user');

module.exports = {
  User: User,  // Export the User model
};

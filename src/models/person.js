const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonSchema = new Schema({
    name:{type: String, required:true},
    gender:{type: String, required:true},
    age:{type: String, required:true}
});

module.exports = mongoose.model('Person',PersonSchema)
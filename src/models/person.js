const mongoose = require('mongoose');
const {Schema} = mongoose;

const PersonSchema = new Schema({
    code:{type: String,required:true},
    name:{type: String, required:true},
    gender:{type: String, required:true},
    age:{type: String, required:true}
});

module.exports = mongoose.model('Person',PersonSchema)
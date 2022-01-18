const mongoose = require('mongoose');

//URL of MongoDB atlas
const URI='mongodb+srv://Strach:Strach22.@cluster0.q1fj9.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(URI)
    .then(db=>console.log('Db is connected'))
    .catch(err=>console.log(err));

module.exports = mongoose;
const mongoose = require('mongoose');
const url = "mongodb+srv://irs786had123:irshad@cluster0.82yikc9.mongodb.net/Hacker?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) => {
    console.log("database connected");
    
}).catch((err) => {
    console.log(err);
    
});

module.exports = mongoose;
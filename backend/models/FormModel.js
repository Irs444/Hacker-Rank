const { model, Schema } = require('../connection');

const FormSchema = new Schema({
    name: String,
    email: String,
    collage: String,
    year: String,
    degree: String,
    course: String,
    number: Number,
   
   
    date: { type: Date, default: Date.now },
});

module.exports = model('form', FormSchema);
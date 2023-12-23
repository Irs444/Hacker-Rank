const { model, Schema } = require('../connection');

const FormSchema = new Schema({
    name: String,
    country: String,
    number: Number,
    profession: String,
    month: Number,
    year: String,
    degree: String,
    course: String,
   
    date: { type: Date, default: Date.now },
});

module.exports = model('form', FormSchema);
const {Schema , model} = require('../connection');

const myschema = new Schema({
    solution: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    question: { type: Schema.Types.ObjectId, ref: 'questions' },
    created_at: { type: Date, default: Date.now },
})

module.exports = model('addsolution', myschema);
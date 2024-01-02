const { model, Schema } = require('../connection');

const SolutionSchema = new Schema({
    solution: String,
    content: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    question: { type: Schema.Types.ObjectId, ref: 'questions' },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('solutions', SolutionSchema);
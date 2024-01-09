const { model, Schema } = require('../connection');

const QuestionSchema = new Schema({
    title: String,
    description: String,
    // content: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('questions', QuestionSchema);
const { model, Schema } = require('../connection');

const TopicSchema = new Schema({
    title: String,
    description: String,
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    created_at: { type: Date, default: Date.now },
});

module.exports = model('topics', TopicSchema);
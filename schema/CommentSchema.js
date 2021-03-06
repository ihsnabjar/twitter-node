const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    comment: String,
    user: {type: Schema.Types.ObjectId, ref: "User"},
    post: {type: Schema.Types.ObjectId, ref: "Post"}
}, {timestamps: true})

const Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment

import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';

const { Schema } = mongoose;

const commentSchema = Schema(
  {
    uid: {
      type: String,
      required: true
    },
    did: {
      type: String,
      required: true
    },
    comment: {
      type: String
    }
  },
  { collection: 'comment', timestamps: true }
);

commentSchema.plugin(mongoosePaginate);

const Comment = mongoose.model('Comment', commentSchema);

export default Comment;

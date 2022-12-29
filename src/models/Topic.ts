import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    },
    concepts: {
      type: [mongoose.Types.ObjectId],
      ref: 'Concept',
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.model('Category', categorySchema);

export default Topic;

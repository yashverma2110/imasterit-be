import mongoose from 'mongoose';

const userTopicSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
    topicId: {
      type: mongoose.Types.ObjectId,
      ref: 'Topic',
    },
    remindAt: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

userTopicSchema.index({ userId: 1, topicId: 1 }, { unique: true });

const UserTopics = mongoose.model('UserTopics', userTopicSchema);

export default UserTopics;

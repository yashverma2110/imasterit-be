import mongoose from 'mongoose';

const historySchema = new mongoose.Schema(
  {
    jobId: {
      type: String,
      required: true,
    },
    conceptId: {
      type: mongoose.Types.ObjectId,
      ref: 'Concept',
    },
    remindAt: {
      type: Date,
      required: true,
    },
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const History = mongoose.model('History', historySchema);

export default History;

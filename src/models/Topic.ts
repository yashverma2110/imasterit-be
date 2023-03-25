import mongoose from "mongoose";

const topicSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    shortName: {
      type: String,
      require: true,
      unique: true,
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

const Topic = mongoose.model("Topic", topicSchema);

export default Topic;

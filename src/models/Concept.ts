import mongoose from "mongoose";

const conceptSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    public: {
      type: Boolean,
      default: true,
    },
    difficulty: {
      type: Number,
      default: 0,
    },
    topicId: {
      type: mongoose.Types.ObjectId,
      ref: 'Topic',
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Concept = mongoose.model("Concept", conceptSchema);

export default Concept;

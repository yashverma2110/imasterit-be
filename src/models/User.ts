import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    telegramId: {
      type: String,
      unique: true,
    },
    username: String,
    firstName: String,
    lastName: String,
    isPremium: Boolean,
    photo: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

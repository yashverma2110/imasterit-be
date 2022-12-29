import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    telegram_id: String,
    username: String,
    firstName: String,
    lastName: String,
    isPremium: String,
    photo: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;

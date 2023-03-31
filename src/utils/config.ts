// echo .env
import dotenv from "dotenv";
dotenv.config();

export default {
  DB_NAME: process.env.MONGODB_NAME ?? '',
  MONGODB_URI: process.env.MONGO_URI ?? '',
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN ?? '',
};

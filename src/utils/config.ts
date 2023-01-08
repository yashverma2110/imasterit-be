// echo .env
import dotenv from "dotenv";
dotenv.config();

export default {
  DB_PASSWORD: process.env.MONGODB_PASSWORD ?? "",
  DB_USERNAME: process.env.MONGODB_USERNAME ?? "",
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN ?? "",
};

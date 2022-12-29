// echo .env
import dotenv from 'dotenv';
dotenv.config();

export default {
  DB_PASSWORD: process.env.MONGODB_PASSWORD ?? '',
  JWT_ACCESS_TOKEN: process.env.JWT_ACCESS_TOKEN ?? '',
};

import mongoose, { ConnectOptions } from "mongoose";
import endpoints from '../utils/config';

mongoose.connect(
  `${endpoints.MONGODB_URI}@${endpoints.DB_NAME}.r6zcuah.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions
);

const db = mongoose.connection;

mongoose.set('strictQuery', false);

db.on("connected", () =>
  console.log("Mongoose default connection established")
);

db.on("error", (error: any) => console.log("Unable to connect to DB", error));

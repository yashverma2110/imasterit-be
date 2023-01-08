import mongoose, { ConnectOptions } from "mongoose";
import ENDPOINTS from "../utils/config";

mongoose.connect(
  `mongodb+srv://${ENDPOINTS.DB_USERNAME}:${ENDPOINTS.DB_PASSWORD}@imaster.yqs5d3h.mongodb.net/?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  } as ConnectOptions
);

const db = mongoose.connection;

db.on("connected", () =>
  console.log("Mongoose default connection established")
);

db.on("error", (error: any) => console.log("Unable to connect to DB", error));

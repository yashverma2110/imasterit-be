import jwt from "jsonwebtoken";
import ENDPOINTS from "../utils/config";

const generateAuthToken = (email: string, id: string) => {
  const token = jwt.sign({ email, id }, ENDPOINTS.JWT_ACCESS_TOKEN);

  return token;
};

const decodeAuthToken = (token: string) => {
  const decoded = jwt.verify(token, ENDPOINTS.JWT_ACCESS_TOKEN);

  return decoded;
};

export { generateAuthToken, decodeAuthToken };

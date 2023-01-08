import jwt from "jsonwebtoken";
import ENDPOINTS from "../utils/config";

const generateAuthToken = (email: string, id: string) => {
  const token = jwt.sign({ email, id }, ENDPOINTS.JWT_ACCESS_TOKEN);

  return token;
};

export { generateAuthToken };

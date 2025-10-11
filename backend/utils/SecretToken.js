import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const createSecretToken = (id) => {
  const secret = process.env.TOKEN_KEY;
  if (!secret) {
    throw new Error("TOKEN_KEY is not defined in .env");
  }

  return jwt.sign({ id }, secret, {
    expiresIn: "3d"
  });
};

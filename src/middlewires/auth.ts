import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  userId?: string;
}
const dotenv = require("dotenv");

dotenv.config();

const tockenSecret: string = process.env.TOKEN_SECRET;

export const auth = (req: AuthenticatedRequest,res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "No token provided" }).send();
  }

  jwt.verify(token, tockenSecret, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" }).send();
    }

    req.userId = user as string;
    next();
  });
};

export const createToken =(userId: string): string => jwt.sign({ userId }, tockenSecret);
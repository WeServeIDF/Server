import { RegisterUserDTO, LoginUserDTO, GetUserDTO } from "../types/userDTO";
import { Request, Response } from "express";
import {
  login,
  register,
  getInfo,
  updateInfo,
} from "../Repositories/userRepository";
import { createToken } from "../middlewires/auth";

interface AuthenticatedRequest extends Request {
  userId: string;
}

export const loginUser = async (req: Request, res: Response) => {
  try {
    const user: LoginUserDTO = req.body.user;
    if (!user) {
      throw new Error("User not found in req");
    }
    console.info("loging in user...", user);
    const userId: string = await (await login(user)).data;

    res.send(createToken(userId));
  } catch (err) {
    console.warn("login failed", err);
    res.sendStatus(404);
  }
};

export const registerUser = async (req: Request, res: Response) => {
  try {
    const user: RegisterUserDTO = req.body.user;
    if (!user) {
      throw new Error("User not found in req");
    }
    console.info("Registering user...", user);
    const userId: string = await (await register(user)).data;

    res.send(createToken(userId));
  } catch (err) {
    console.warn("register failed", err);
    res.sendStatus(404);
  }
};

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId: string = req.userId;
    const user: GetUserDTO = await (await getInfo(userId)).data;

    if (!user) {
      throw new Error("User not found");
    }

    res.send(user);
  } catch (err) {
    console.warn("getUser failed", err);
    res.sendStatus(404);
  }
};

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
    try {
        const user: RegisterUserDTO = req.body.user;
        const userId: string = req.userId;

        if (user.id !== userId) {
            throw new Error ("Invalid request, cannot update other users");
        }
        const response = await updateInfo(user);
    
        if (response.status !== 200) {
          throw new Error(`User not found, server error: ${response.statusText}`);
        }
    
        res.sendStatus(200);
      } catch (err) {
        console.warn("updateUser failed", err);
        res.sendStatus(404);
      }
};

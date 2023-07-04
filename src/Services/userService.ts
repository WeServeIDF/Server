import { RegisterUserDTO, LoginUserDTO, GetUserDTO } from "../types/userDTO" 
import { Request, Response } from 'express';
import { login, register, getInfo, updateInfo } from "../Repositories/userRepository";
import { createToken } from "../middlewires/auth";

export const loginUser = async (req : Request, res : Response) => {
    try {
        const user : LoginUserDTO = req.body.user;
        if (!user) {
            throw new Error("User not found in req");
        }
        console.info("loging in user...", user);
        const userId : string = await (await login(user)).data;

        res.send(createToken(userId));
    } catch (err) {
        console.warn('login failed', err);
        res.sendStatus(404);
    }
}

export const registerUser = async (req : Request, res : Response) => {
    try {
        const user : RegisterUserDTO = req.body.user;
        if (!user) {
            throw new Error("User not found in req");
        }
        console.info("Registering user...", user);
        const userId : string = await (await register(user)).data;

        res.send(createToken(userId));
    } catch (err) {
        console.warn('register failed', err);
        res.sendStatus(404);
    }
}

export const getUser = async (req : Request, res : Response) => {
    res.send('{loginUser}');
}

export const updateUser = async (req : Request, res : Response) => {
    res.send('{loginUser}');
}
import { DBserver } from '../api/DBapi';

import { RegisterUserDTO, LoginUserDTO, GetUserDTO } from "../types/userDTO" 

export const login = async (user : LoginUserDTO) => await DBserver.post('/users/login', user);

export const register = async (user : RegisterUserDTO) => await DBserver.post('/users/register', user);

export const getInfo = async (userId : number) => await DBserver.get(`/users/${userId}`);

export const updateInfo = async (user : RegisterUserDTO) => await DBserver.put('/users/uptade', user);
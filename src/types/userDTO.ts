import { workPlaceTDO } from "./workPlaceDTO"

export type RegisterUserDTO = {
    username: string;
    id: string;
    password: string;
    phone: string;
    unit: string;
    workPlace: workPlaceTDO;
};

export type LoginUserDTO = {
    username: string;
    password: string;
};

export type GetUserDTO = Omit<RegisterUserDTO, "password">;

import { ERoles } from "../enums/Roles";

export interface IUser {
    name: string;
    email: string;
    role: ERoles;
    password?:string;
    googleId?: string;
    avatarUrl?: string;
}
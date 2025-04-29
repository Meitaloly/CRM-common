import { ERoles } from "../enums/Roles";

export interface IUser {
    name: string;
    email: string;
    role: ERoles;
    isActive: boolean;
    password?: string;
    googleId?: string;
    avatarUrl?: string;
    clientId?: string; 
  }
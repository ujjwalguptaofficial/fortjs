import { Document } from "mongoose";
export interface IUser extends Document {
    id: string;
    name: string;
    address: string;
    gender: string;
    toClient: () => IUser;
}
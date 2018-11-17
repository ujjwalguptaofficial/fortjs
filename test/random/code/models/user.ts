import { Length, Contains, IsIn, IsEmail } from "class-validator";

export class User {

    id?: number;

    @Length(1)
    name: string;

    @IsIn(["male", "female"])
    gender: string;

    @Length(10, 100)
    address: string;

    @IsEmail()
    emailId: string;
}
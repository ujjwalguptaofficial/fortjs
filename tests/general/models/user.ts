import { Length, Contains, IsIn, IsEmail } from "class-validator";

export class User {
    id?= 0;

    @Length(5)
    password?= "";

    @Length(5)
    name = "";

    @IsIn(["male", "female"])
    gender = "";

    @Length(10, 100)
    address = "";

    @IsEmail()
    emailId = "";

    init?(user: any) {
        this.id = Number(user.id);
        this.name = user.name;
        this.gender = user.gender;
        this.address = user.address;
        this.emailId = user.emailId;
        this.password = user.password;
        return this;
    }
}
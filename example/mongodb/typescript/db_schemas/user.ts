import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/user";

const schemaObj = new Schema({
    // id: { type: Number, required: true },
    name: { type: String, required: true },
    address: { type: String },
    gender: { type: String },

});

// to replace _id with id
schemaObj.method('toClient', function () {
    const obj = this.toObject();

    //Rename fields
    obj.id = obj._id.toString();
    delete obj._id;

    return obj;
});

export const userSchema = model<IUser>('User', schemaObj);
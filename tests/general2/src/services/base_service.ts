import { User } from "../models/user";

interface IStore {
    users: User[];
}

const store: IStore = {
    users: [{
        id: 1,
        name: "ujjwal",
        address: "bhubaneswar india",
        emailId: "ujjwal@mg.com",
        gender: "male",
        password: "admin"
    }]
}
export class BaseService {
    get users() {
        return store.users;
    }
}
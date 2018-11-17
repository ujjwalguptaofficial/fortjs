import { User } from "../models/user";

interface IStore {
    users: User[];
}

const store: IStore = {
    users: []
}
export class BaseService {
    get users() {
        return store.users;
    }
}
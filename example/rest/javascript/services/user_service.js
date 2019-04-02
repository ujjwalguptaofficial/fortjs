import {
    User
} from "../models/user";

const store = {
    users: [{
        id: 1,
        name: "ujjwal",
        address: "bhubaneswar india",
        emailId: "ujjwal@mg.com",
        gender: "male",
        password: "admin"
    }]
}

export class UserService {
    getUsers() {
        return store.users;
    }

    addUser(user) {
        const lastUser = store.users[store.users.length - 1];
        user.id = lastUser == null ? 1 : lastUser.id + 1;
        store.users.push(user);
        return user;
    }

    updateUser(user) {
        const existingUser = store.users.find(qry => qry.id === user.id);
        if (existingUser != null) {
            existingUser.name = user.name;
            existingUser.address = user.address;
            existingUser.gender = user.gender;
            existingUser.emailId = user.emailId;
            return true;
        }
        return false;
    }

    getUser(id) {
        return store.users.find(user => user.id === id);
    }

    removeUser(id) {
        const index = store.users.findIndex(user => user.id === id);
        store.users.splice(index, 1);
    }
}
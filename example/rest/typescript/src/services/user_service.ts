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

export class UserService {
  getUsers() {
      return store.users;
  }

  addUser(user: User) {
    const lastUser = store.users[store.users.length - 1];
    user.id = lastUser == null ? 1 : lastUser.id + 1;
    store.users.push(user);
    return user;
  }

  updateUser(user: User) {
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

  getUser(id: number) {
    return store.users.find(user => user.id === id);
  }

  removeUser(id: number) {
    const index = store.users.findIndex(user => user.id === id);
    store.users.splice(index, 1);
  }
}
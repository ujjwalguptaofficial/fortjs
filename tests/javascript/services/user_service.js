

export class UserService {

    constructor() {
        this.store = {
            users: [{
                id: 1,
                name: "ujjwal",
                address: "bhubaneswar india",
                emailId: "ujjwal@mg.com",
                gender: "male",
                password: "admin"
            }]
        };
    }

    getUsers() {
        return this.store.users;
    }

    addUser(user) {
        const lastUser = this.store.users[this.store.users.length - 1];
        user.id = lastUser == null ? 1 : lastUser.id + 1;
        this.store.users.push(user);
        return user;
    }

    updateUser(user) {
        const existingUser = this.store.users.find(qry => qry.id === user.id);
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
        return this.store.users.find(user => user.id === id);
    }

    removeUser(id) {
        const index = this.store.users.findIndex(user => user.id === id);
        this.store.users.splice(index, 1);
    }
}
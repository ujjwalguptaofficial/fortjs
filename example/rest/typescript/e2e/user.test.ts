import axios from "axios";
import { createApp } from "..";
import { Fort } from "fortjs";
const instance = axios.create({
    baseURL: 'http://localhost:4000/user',
    timeout: 1000
});

describe('/user', () => {

    let app: Fort;
    beforeAll(async () => {
        app = await createApp() as any;
    });

    it('/get all users', async () => {
        const response = await instance.get('/', {
            headers: {
                accept: 'application/json'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json');
        expect(response.data).toEqual([
            { "address": "bhubaneswar india", "emailId": "ujjwal@mg.com", "gender": "male", "id": 1, "name": "ujjwal", "password": "admin" }
        ]);
    });

    it('/get single user', async () => {
        const response = await instance.get('/1', {
            headers: {
                accept: 'application/json'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json');
        expect(response.data).toEqual(
            { "address": "bhubaneswar india", "emailId": "ujjwal@mg.com", "gender": "male", "id": 1, "name": "ujjwal", "password": "admin" }
        );
    });

    it('/add user', async () => {
        const user = {
            "name": "ujjwal",
            "emailId": "ujjwal@m.com",
            "password": "12345as",
            "gender": "male",
            "address": "sadfsgbhfgtbrg"
        };
        const response = await instance.post('/', user, {
            headers: {
                accept: 'application/json'
            }
        });
        expect(response.status).toEqual(201);
        expect(response.headers['content-type']).toEqual('application/json');

        expect(response.data).toEqual({ id: 2, ...user });
    });

    it('/update user', async () => {
        const user = {
            "name": "ujjwal gupta",
            "emailId": "ujjwal@m.com",
            "password": "12345as",
            "gender": "male",
            "address": "sadfsgbhfgtbrg",
            "id": 2
        };
        const response = await instance.put('/', user, {
            headers: {
                accept: '*/*'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data).toEqual("user updated");
    });

    it('/check updated user', async () => {
        const user = {
            "name": "ujjwal gupta",
            "emailId": "ujjwal@m.com",
            "password": "12345as",
            "gender": "male",
            "address": "sadfsgbhfgtbrg",
            "id": 2
        };
        const response = await instance.get('/2', {
            headers: {
                accept: 'application/json'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toEqual('application/json');
        expect(response.data).toEqual(
            user
        );
    });

    it('/remove user', async () => {

        const response = await instance.delete('/2', {
            headers: {
                accept: '*/*'
            }
        });
        expect(response.status).toEqual(200);
        expect(response.data).toEqual("user deleted");
    });

    it('/get deleted user or not existing user', async () => {
        try {
            const response = await instance.get('/2', {
                headers: {
                    accept: '*/*'
                }
            });
        }
        catch (ex) {
            expect(ex.response.status).toEqual(404);
            expect(ex.response.data).toEqual('invalid user id');
        }
    });

    afterAll(() => {
        return app.destroy();
    });

});
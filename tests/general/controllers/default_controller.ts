import { Controller, viewResult, Worker, Route, jsonResult, HTTP_METHOD, DefaultWorker, Assign } from "fortjs";
import { ObjectID } from "mongodb";
import { UserService } from "../services/user_service";
export class DefaultController extends Controller {

    constructor(@Assign(UserService) service: UserService, @Assign('world') hello) {
        console.log('variable', service);
        console.log('world', hello);
        super();
    }

    @DefaultWorker()
    async index() {
        // just for making sure these fields has been initiated
        const params = this.param;
        const query = this.query;
        const data = this.data;
        return new Promise((res, rej) => {
            res(viewResult("default/index.html", { title: "Welcome to fort" }));
        });
    }

    @Worker([HTTP_METHOD.Get, HTTP_METHOD.Post])
    @Route("/friends")
    async getFriends() {
        const friends = ["mohan", "sohan"];
        return jsonResult({
            friends: friends
        });
    }

    @Worker([HTTP_METHOD.Get])
    @Route('/get-mongo')
    async getMongoEquivalentData() {
        return jsonResult([
            {
                _id: new ObjectID(),
                name: 'ujjwal',
                gender: 'male',
                address: 'sadfsgbhfgtbrg',
                __v: 0
            }
        ]);
    }
}
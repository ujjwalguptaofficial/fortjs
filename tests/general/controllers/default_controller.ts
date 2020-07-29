import { Controller, viewResult, Worker, Route, jsonResult, HTTP_METHOD, DefaultWorker, Assign, Singleton, textResult } from "fortjs";
import { ObjectID } from "mongodb";
import { UserService } from "../services/user_service";
import { MySingleton } from "../extra/singleton";
export class DefaultController extends Controller {

    singleton: MySingleton;
    constructor(@Singleton(MySingleton) obj: MySingleton) {
        super();
        this.singleton = obj;
    }

    @DefaultWorker()
    async index(@Assign('Welcome to fort') title: string) {
        // just for making sure these fields has been initiated
        const params = this.param;
        const query = this.query;
        const data = this.data;
        return new Promise((res, rej) => {
            res(viewResult("default/index.html", { title: title }));
        });
    }

    @Worker()
    async index1(@Assign('Ujjwal') firstName: string, @Assign('Gupta') lastName: string) {
        return textResult(firstName + lastName)
    }

    @Worker()
    async setSingletonValue() {
        this.singleton.props = this.query.value;
    }

    @Worker()
    async getSingletonValue(@Singleton(MySingleton) obj) {
        return textResult(obj.props);
    }

    @Worker(HTTP_METHOD.Get, HTTP_METHOD.Post)
    @Route("/friends")
    async getFriends() {
        const friends = ["mohan", "sohan"];
        return jsonResult({
            friends: friends
        });
    }

    @Worker(HTTP_METHOD.Get)
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

    @Worker()
    workerWithoutPromise() {
        console.error('query', this.query);
        return textResult("I am a worker without promise");
    }
}
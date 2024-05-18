import { Controller, viewResult, worker, route, jsonResult, HTTP_METHOD, defaultWorker, assign, singleton, textResult } from "fortjs";
import { ObjectID } from "mongodb";
import { UserService } from "../services/user_service";
import { MySingleton } from "../extra/singleton";

export class DefaultController extends Controller {

    singleton: MySingleton;
    constructor(@singleton(MySingleton) obj: MySingleton) {
        super();
        this.singleton = obj;
    }

    @defaultWorker()
    async index(@assign('Welcome to fort') title: string) {
        // just for making sure these fields has been initiated
        const params = this.param;
        const query = this.query;
        const data = this.data;
        return new Promise((res, rej) => {
            res(viewResult("src/views/default/index.html", { title: title }));
        });
    }

    @worker()
    async index1(@assign('Ujjwal') firstName: string, @assign('Gupta') lastName: string) {
        return textResult(firstName + lastName)
    }

    @worker()
    async setSingletonValue() {
        this.singleton.props = this.query.value;
    }

    @worker
    async getSingletonValue(@singleton(MySingleton) obj) {
        return textResult(obj.props);
    }

    @worker(HTTP_METHOD.Get, HTTP_METHOD.Post)
    @route("/friends")
    async getFriends() {
        const friends = ["mohan", "sohan"];
        return jsonResult({
            friends: friends
        });
    }

    @worker(HTTP_METHOD.Get)
    @route('/get-mongo')
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

    @worker()
    workerWithoutPromise() {
        console.error('query', this.query);
        return textResult("I am a worker without promise");
    }
}
import { Route, Worker, Controller, textResult } from "fortjs";

export class SessionController extends Controller {
    @Worker()
    async add() {
        const key = this.body.key;
        const value = this.body.value;
        this.session.set(key, value);
        return textResult("saved");
    }

    @Worker()
    async get() {
        const key = this.query.key;
        console.log("key", key);
        if (await this.session.isExist(key)) {
            const valueFromSession = await this.session.get(key);
            console.log("value from session", valueFromSession);
            return textResult(valueFromSession.toString());
        }
        else {
            return textResult("key is not found");
        }

    }

    @Worker()
    async update() {
        const key = this.body.key;
        const value = this.body.value;
        this.session.set(key, value);
        return textResult("updated");
    }

    @Worker()
    async remove() {
        const key = this.query.key;
        await this.session.remove(key);
        return textResult("removed");
    }
}
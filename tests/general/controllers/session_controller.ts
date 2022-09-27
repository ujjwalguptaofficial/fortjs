import { route, worker, Controller, textResult, jsonResult } from "fortjs";

export class SessionController extends Controller {
    @worker()
    async add() {
        const key = this.body.key;
        const value = this.body.value;
        await this.session.set(key, value);
        return textResult("saved");
    }

    @worker()
    @route("/add-many")
    async addMany() {
        const key1 = this.body.key1;
        const value1 = this.body.value1;
        const key2 = this.body.key2;
        const value2 = this.body.value2;
        await this.session.setMany({
            [key1]: value1,
            [key2]: value2
        })
        return textResult("saved");
    }

    @worker()
    async exist() {
        const key = this.query.key;
        if (await this.session.isExist(key)) {
            return textResult('key is found');
        }
        else {
            return textResult("key is not found");
        }

    }

    @worker()
    async get() {
        const key = this.query.key;
        this.logger.debug("key", key);
        const valueFromSession = await this.session.get(key);
        this.logger.debug("value from session", valueFromSession);
        return jsonResult({
            value: valueFromSession
        });
    }

    @worker()
    async update() {
        const key = this.body.key;
        const value = this.body.value;
        await this.session.set(key, value);
        return textResult("updated");
    }

    @worker()
    async remove() {
        const key = this.query.key;
        await this.session.remove(key);
        return textResult("removed");
    }

    @worker()
    async clear() {
        await this.session.clear();
        return textResult("cleared");
    }

    @worker()
    async getAll() {
        const valueFromSession = await this.session.getAll();
        return jsonResult({
            value: valueFromSession
        });
    }
}
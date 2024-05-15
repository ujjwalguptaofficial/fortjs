import { assign, Guard, textResult } from "fortjs";

export class GuardInjectorTest extends Guard {
    constructorValue: string;
    constructor(@assign('hello') value: string) {
        super();
        this.constructorValue = value;
    }

    async check(@assign('injection ok in guard') value: string) {
        return textResult(this.constructorValue + value, 200);
    }
}
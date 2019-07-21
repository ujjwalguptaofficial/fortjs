import { Assign, Guard, textResult } from "fortjs";

export class GuardInjectorTest extends Guard {
    constructorValue: string;
    constructor(@Assign('hello') value: string) {
        super();
        this.constructorValue = value;
    }

    async check(@Assign('injection ok in guard') value: string) {
        return textResult(this.constructorValue + value, 200);
    }
}
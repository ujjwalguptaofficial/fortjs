import { ComponentOption } from "fortjs";
import { timingSafeEqual } from "crypto";
export class MyComponentOption extends ComponentOption {
    timingSafeEqual(value1, value2) {
        if (value1.length !== value2.length) {
            return false;
        }
        return timingSafeEqual(Buffer.from(value1),
            Buffer.from(value2));
    }
}
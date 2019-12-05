
import { Wall, textResult } from "fortjs";
import * as helmet from 'helmet';

export class HelmetWall extends Wall {
    async onIncoming() {
        const result = await this.callMiddleWare(helmet());
    }

    callMiddleWare(middleWare) {
        return new Promise((res, rej) => {
            middleWare(this.request, this.response, res);
        });
    }
}    

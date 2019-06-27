import { Wall, textResult } from "fortjs";
export class WallWithoutOutgoing extends Wall {


    async onIncoming() {
        this.response.setHeader('Wall-Without-Outgoing-Wall', '*');
        return null;
    }

  
}
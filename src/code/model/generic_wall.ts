import { Wall } from "../abstracts/wall";

export class GenericWall extends Wall {
    onIncoming() {
        return null;
    }

    onOutgoing(){
        return null;
    }
}
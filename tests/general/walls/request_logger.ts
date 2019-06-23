import { Wall, textResult } from "fortjs";
let reqCount = 0;
export class RequestLogger extends Wall {

    private getIP(req) {
        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        return ip;
    }

    async onIncoming() {
        console.log('incoming');
        this.data.ip = this.getIP(this.request);
        this.data.reqCount = ++reqCount;
        // console.log("reqcount", this.data.reqCount);
        // console.log("body", this.body);
        // console.log("query", this.query);
        // console.log("headers", this.request.headers);
        if (this.request.headers['blockbywall'] != null || this.query.blockByWall == 'true') {
            return textResult("blocked by wall");
        }
        else if (this.request.headers['throwexception'] != null) {
            throw new Error("thrown by wall");
        }
        return null;
    }

    async onOutgoing() {
        console.log('outgoing');
        // this.response.setHeader('Access-Control-Allow-Origin', '*');
        // this.response.setHeader("Access-Control-Allow-Headers", 'Content-Type');
        return null;
    }
}
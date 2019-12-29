import { Wall, textResult, Assign } from "fortjs";
let reqCount = 0;
export class RequestLogger extends Wall {

    injectionValue: string;
    constructor(@Assign('wall constructor') value: string) {
        super();
        this.injectionValue = value;
    }

    private getIP(req) {
        const ip = (req.headers['x-forwarded-for'] || '').split(',').pop() ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress ||
            req.connection.socket.remoteAddress;
        return ip;
    }

    async onIncoming(@Assign('onIncoming called') value: string) {
        this.injectionValue = `${this.injectionValue} ${value}`;
        this.response.setHeader('Custom-Header-From-Incoming-Wall', '1');
        this.data.ip = this.getIP(this.request);
        if (this.query.doNotCount !== 'true') {
            this.data.reqCount = ++reqCount;
        }

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
    }

    async onOutgoing(@Assign('on outgoing called') value: string) {
        this.logger.log('executing request logger');
        this.response.setHeader('Custom-Header-From-Outgoing-Wall', '*');
        this.response.setHeader('injection-result', this.injectionValue + ` ${value}`);
    }
}
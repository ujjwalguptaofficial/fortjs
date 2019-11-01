export class Logger {
    info?(...args) {
        this.debug(args);
    }
    error?(...args) {
        this.debug(args);
    }
    log?(...args) {
        this.debug(args);
    }
    debug?(...args) {
        console.log(...args);
    }
}
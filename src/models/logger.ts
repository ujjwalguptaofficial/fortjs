export class Logger {
    info?(...args): void;
    error?(...args): void;
    log?(...args): void;
    debug?(...args): void {
        console.log(args[0]);
    }
}
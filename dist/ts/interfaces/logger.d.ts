export interface ILogger {
    info?(...args: any[]): void;
    error?(...args: any[]): void;
    log?(...args: any[]): void;
    debug?(...args: any[]): void;
}

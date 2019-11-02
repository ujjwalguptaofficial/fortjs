import * as winston from "winston";
import "winston-daily-rotate-file";
import { Logger } from "fortjs";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // - Write to all logs with level `debug` and below to `all.log` 
        // - Write all logs error (and below) to `error.log`.
        new (winston.transports as any).DailyRotateFile(
            { datePattern: 'DD-MM-YYYY', filename: `logs/error.log`, level: 'error' }
        ),
        new (winston.transports as any).DailyRotateFile(
            { datePattern: 'DD-MM-YYYY', filename: `logs/all.log`, level: 'info' }
        )
    ]
});

//
// If we're not in production then log to the `console`  
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
        level: 'debug'
    }));
}

export class MyLogger extends Logger {
    error(message) {
        logger.error(message);
    }

    info(message) {
        logger.info(message);
    }

    debug(message) {
        logger.debug(message);
    }

    log(level, msg) {
        logger.log(level, msg);
    }

}
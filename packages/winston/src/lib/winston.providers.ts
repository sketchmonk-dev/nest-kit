import { Inject, Provider } from "@nestjs/common";
import { WINSTON_MODULE_OPTIONS } from "./winston.options";
import { LoggerOptions, createLogger } from "winston";

export const WINSTON_LOGGER_TOKEN = Symbol('WINSTON_LOGGER_TOKEN');
export const InjectLogger = () => Inject(WINSTON_LOGGER_TOKEN);
export const loggerProvider: Provider = {
    inject: [WINSTON_MODULE_OPTIONS],
    provide: WINSTON_LOGGER_TOKEN,
    useFactory: (options: LoggerOptions) => {
        return createLogger(options);
    }
}
import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './winston.options';
import { WINSTON_LOGGER_TOKEN, loggerProvider } from './winston.providers';

@Module({
    imports: [],
    providers: [loggerProvider],
    exports: [WINSTON_LOGGER_TOKEN],
})
export class WinstonModule extends ConfigurableModuleClass {}
import { ConfigurableModuleBuilder } from '@nestjs/common';
import { LoggerOptions } from 'winston';

export const {
    MODULE_OPTIONS_TOKEN: WINSTON_MODULE_OPTIONS,
    ConfigurableModuleClass
} = new ConfigurableModuleBuilder<LoggerOptions>().build();
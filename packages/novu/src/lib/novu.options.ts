import { ConfigurableModuleBuilder, Inject, Provider } from '@nestjs/common';
import { Novu } from '@novu/node';

export interface INovuModuleOptions {
    apiKey: string;
    config?: ConstructorParameters<typeof Novu>[1];
}

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } = new ConfigurableModuleBuilder<INovuModuleOptions>().build();
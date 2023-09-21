import { ConfigurableModuleBuilder } from "@nestjs/common";
import { type ConfigurationParameters } from '@ory/hydra-client';

// configurable module
export const { 
    ConfigurableModuleClass, 
    MODULE_OPTIONS_TOKEN: HYDRA_MODULE_OPTIONS_TOKEN 
} = new ConfigurableModuleBuilder<ConfigurationParameters>().build();
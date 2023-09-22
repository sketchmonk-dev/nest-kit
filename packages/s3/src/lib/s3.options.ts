import { S3ClientConfig } from "@aws-sdk/client-s3";
import { ConfigurableModuleBuilder } from "@nestjs/common";

export const {
    MODULE_OPTIONS_TOKEN: S3_OPTIONS_TOKEN,
    ConfigurableModuleClass
} = new ConfigurableModuleBuilder<S3ClientConfig>().build();
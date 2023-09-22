import { Module } from '@nestjs/common';
import { ConfigurableModuleClass } from './s3.options';
import { S3_CLIENT_TOKEN, s3ClientProvider } from './s3.providers';

@Module({
    imports: [],
    providers: [s3ClientProvider],
    exports: [S3_CLIENT_TOKEN],
})
export class S3Module extends ConfigurableModuleClass {}
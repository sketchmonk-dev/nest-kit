import { Provider, Inject } from '@nestjs/common';
import { S3, S3ClientConfig } from '@aws-sdk/client-s3';
import { S3_OPTIONS_TOKEN } from './s3.options';

export const S3_CLIENT_TOKEN = Symbol('S3_CLIENT_TOKEN');
export const InjectS3Client = () => Inject(S3_CLIENT_TOKEN);
export const s3ClientProvider: Provider = {
    inject: [S3_OPTIONS_TOKEN],
    provide: S3_CLIENT_TOKEN,
    useFactory: (options: S3ClientConfig) => {
        return new S3(options).putObject({
            Bucket: 'test',
            Key: 'test',
            Body: 'test',
        });
    }
}
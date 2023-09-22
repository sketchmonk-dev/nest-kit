# @sketchmonk/nest-s3

`@sketchmonk/nest-s3` is a Nest.js wrapper for AWS S3, designed to simplify the process of interacting with Amazon Simple Storage Service (S3) within your Nest.js applications. With this package, you can easily upload, download, and manage files in your S3 buckets with minimal configuration and effort.

## Installation

You can install `@sketchmonk/nest-s3` using npm, yarn or pnpm:

```bash
npm install @sketchmonk/nest-s3
# or
yarn add @sketchmonk/nest-s3
# or
pnpm add @sketchmonk/nest-s3
```

## Configuration

Before you can start using `@sketchmonk/nest-s3`, you need to configure it by providing your AWS credentials. You can do this in your Nest.js application module:

```typescript
import { Module } from '@nestjs/common';
import { S3Module } from '@sketchmonk/nest-s3';

@Module({
  imports: [
    S3Module.registerAsync({
        imports: [ConfigModule.forRoot()],
        inject: [ConfigService],
        useFactory: (config: ConfigService) => {
            return {
                region: config.get('AWS_S3_REGION'),
                credentials: {
                    accessKeyId: config.get('AWS_S3_ACCESS_KEY_ID'),
                    secretAccessKey: config.get('AWS_S3_SECRET_ACCESS_KEY'),
                }
            }
        }
    }),
  ],
})
export class AppModule {}
```

Make sure to set the `AWS_S3_REGION`, `AWS_S3_ACCESS_KEY_ID`, `AWS_S3_SECRET_ACCESS_KEY` in your .env file.

## Usage

Once you have configured the module, you can inject the `S3` instance into your services or controllers to start working with S3. Here's an example of how to upload a file to S3:

```typescript
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3 } from '@aws-sdk/client-s3';

@Controller('files')
export class FilesController {
    constructor(@InjectS3Client() s3: S3) {}

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File): Promise<string> {
        const response = await this.s3.putObject({
            Bucket: this.config.get('AWS_S3_BUCKET_NAME'),
            Key: file.filename,
            Body: file.buffer
        })
        return { key: file.filename }
    }
}
```

You can now use the native `S3` instance to perform various operations, such as uploading files, downloading files, deleting files, and more. Please refer to the documentation and AWS SDK for more details on available operations.

## Contributing

We welcome contributions to `@sketchmonk/nest-s3`. If you find a bug or want to add a new feature, please open an issue or submit a pull request on GitHub.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

This package is developed and maintained by [Sketchmonk](https://www.sketchmonk.com).
Feel free to contact me at [developer@sketchmonk.com](mailto://developer@sketchmonk.com) if you have any questions or suggestions.

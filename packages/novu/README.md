# @sketchmonk/nest-novu

`@sketchmonk/nest-novu` is a Nest.js client wrapper for the @novu/node client, providing a seamless integration of [Novu](https://web.novu.co/auth/login), an open-source notification infrastructure, into your Nest.js applications. 
With this package, you can easily send and manage notifications using Novu's powerful features.

## Installation

You can install `@sketchmonk/nest-novu` using npm, yarn or pnpm:

```bash
npm install @sketchmonk/nest-novu
# or
yarn add @sketchmonk/nest-novu
# or
pnpm add @sketchmonk/nest-novu
```

## Configuration

You can configure `NovuModule` with the api-key and configs used to create a Novu instance.

```typescript
import { Module } from '@nestjs/common';
import { NovuModule, NovuAsyncOptions } from '@sketchmonk/nest-novu';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    NovuModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        apiKey: config.get('NOVU_API_KEY', 'abcdefg'),
        config: {
          backendUrl: config.get('NOVU_BACKEND_URL', 'https://api.novu.co/v1'),
        },
      }),
    }),
  ],
  // ...
})
export class AppModule {}
```

In this code, you can dynamically configure the `apiKey` and `backendUrl` for Novu using the `ConfigService` from Nest.js's `ConfigModule`. Adjust the configuration options to match your Novu setup.

## Usage

Once you have configured the `@sketchmonk/nest-novu` module, you can now inject the `Novu` instance using `InjectNovu` decorator. Here's an example usage:

```ts
import { Controller, Get } from '@nestjs/common';
import { Novu } from '@novu/node';

@Controller('notifications')
export class NotificationsController {
  constructor(@InjectNovu() private readonly novu: Novu) {}

  @Get('send')
  async sendNotification(data: any) {
    await this.novu.trigger('your-trigger', {/**...*/})
  }
}
```

In this example `InjectNovu` injects the `Novu` instance to the property `novu` of the controller. From here you can use the methods provided by the novu client to send notifications.

Feel free to explore Novu's features and adapt the code to suit your specific requirements.

## Contributing

Contributions to `@sketchmonk/nest-novu` are welcome. If you encounter issues, have suggestions, or want to add new features, please open an issue or submit a pull request on GitHub.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

`@sketchmonk/nest-novu` is developed and maintained by [Sketchmonk](https://www.sketchmonk.com). If you have any questions or need assistance, please feel free to contact me at [developer@sketchmonk.com](mailto://developer@sketchmonk.com).
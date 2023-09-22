# @sketchmonk/nest-hydra

`@sketchmonk/nest-hydra` is a Nest.js client wrapper for ORY Hydra, an open-source OAuth2 and OpenID Connect server. This package simplifies the integration of OAuth2 and OpenID Connect functionality into your Nest.js applications by providing a convenient way to interact with the ORY Hydra server.

## Installation

You can install `@sketchmonk/nest-hydra` using npm, yarn or pnpm:

```bash
npm install @sketchmonk/nest-hydra
# or
yarn add @sketchmonk/nest-hydra
# or
pnpm add @sketchmonk/nest-hydra
```

Certainly! Here's the configuration and usage sections for `@sketchmonk/nest-hydra` based on the provided samples:

## Configuration

To configure `@sketchmonk/nest-hydra`, you can use the following sample code with Nest.js's `HydraClientModule`:

```typescript
import { Module } from '@nestjs/common';
import { HydraClientModule } from '@sketchmonk/nest-hydra';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HydraClientModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        basePath: config.get('HYDRA_ADMIN_URL', 'http://127.0.0.1:4445'),
      })
    }),
  ],
})
export class AppModule {}
```

This code allows you to dynamically configure the base URL for the ORY Hydra server using Nest.js's `ConfigService`. You can adjust the URL and other configuration options as needed.

## Usage

To use `@sketchmonk/nest-hydra` in your application, you can create a service like the one in your sample code:

```typescript
import { Injectable } from "@nestjs/common";
import { InjectHydraClient, HydraClient } from "@sketchmonk/nest";

@Injectable()
export class OAuth2Service {
    constructor(
        constructor(@InjectHydraClient() private readonly hydra: HydraClient) {}
    ) { }

    // ... (rest of your OAuth2 service methods)
}
```

The `HydraClient` is an object consisting of instances of all the API clients in hydra:
```ts
type HydraClient = {
    oauth2: OAuth2Api,
    jwk: JwkApi,
    oidc: OidcApi,
    wellKnown: WellknownApi,
    metadata: MetadataApi
}
```

You can inject the `HydraClient` object provided by `@sketchmonk/nest-hydra` into your service and use it to interact with ORY Hydra for various OAuth2 and OpenID Connect operations.

Please make sure to import the necessary modules and dependencies in your Nest.js application for everything to work correctly.
Feel free to adapt and customize the code to suit your specific requirements and use cases.

## Contributing

We welcome contributions to `@sketchmonk/nest-hydra`. If you find issues, have suggestions, or want to add new features, please open an issue or submit a pull request on GitHub.

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Author

`@sketchmonk/nest-hydra` is developed and maintained by [Sketchmonk](https://www.sketchmonk.com). If you have questions or need assistance, please feel free to contact me at [developer@sketchmonk.com](mailto://developer@sketchmonk.com).
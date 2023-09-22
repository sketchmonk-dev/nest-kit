import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HydraClientModule } from '@sketchmonk/nest-hydra';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NovuModule } from '@sketchmonk/nest-novu';

@Module({
  imports: [
    HydraClientModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        basePath: config.get('HYDRA_ADMIN_URL', 'http://127.0.0.1:4445'),
      })
    }),
    NovuModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        apiKey: config.get('NOVU_API_KEY', 'abcdefg'),
        config: {
          backendUrl: config.get('NOVU_BACKEND_URL', 'https://api.novu.co/v1'),
        }
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

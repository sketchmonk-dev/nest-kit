import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HydraClientModule } from '@sketchmonk/nest-hydra';
import * as winston from 'winston';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NovuModule } from '@sketchmonk/nest-novu';
import { S3Module } from '@sketchmonk/nest-s3';
import { WinstonModule } from '@sketchmonk/nest-winston';

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
    }),
    // S3Module.registerAsync({
    //   imports: [ConfigModule.forRoot()],
    //   inject: [ConfigService],
    //   useFactory: (config: ConfigService) => {
    //       return {
    //         region: config.get('AWS_S3_REGION'),
    //         credentials: {
    //             accessKeyId: config.get('AWS_S3_ACCESS_KEY_ID'),
    //             secretAccessKey: config.get('AWS_S3_SECRET_ACCESS_KEY'),
    //         }
    //       }
    //   }
    // }),
    WinstonModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          level: config.get('LOG_LEVEL', 'info'),
          format: winston.format.json(),
          defaultMeta: { service: 'example' },
          transports: [
            new winston.transports.Console(),
            new winston.transports.File({ filename: 'error.log', level: 'error' }),
          ]
        }
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

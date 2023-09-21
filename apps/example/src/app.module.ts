import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HydraClientModule } from '@sketchmonk/nest-hydra';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HydraClientModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        basePath: config.get('HYDRA_ADMIN_URL', 'http://127.0.0.1:4445'),
      })
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

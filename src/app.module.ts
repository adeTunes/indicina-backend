import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './url/url.module';
import { ConfigModule } from '@nestjs/config';
import { validateAppConfig } from './app.config';

@Module({
  imports: [
    UrlModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateAppConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UrlController],
  providers: [UrlService, ConfigService],
})
export class UrlModule {}

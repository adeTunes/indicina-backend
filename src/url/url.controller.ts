import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Res,
  NotFoundException,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';

@Controller()
export class UrlController {
  constructor(
    private readonly urlService: UrlService,
    private config: ConfigService,
  ) {}

  @Post('api/encode')
  encode(@Body('url') longUrl: string) {
    const code = this.urlService.encode(longUrl);
    return { shortUrl: `${this.config.get('APP_DOMAIN')}/${code}` };
  }

  @Post('api/decode')
  decode(@Body('shortUrl') code: string) {
    const longUrl = this.urlService.decode(code);
    return { longUrl };
  }

  @Get('api/statistic/:code')
  stats(@Param('code') code: string) {
    return this.urlService.getStats(code);
  }

  @Get('api/list')
  list() {
    return this.urlService.list();
  }

  @Get(':code')
  redirect(@Param('code') code: string, @Res() res: Response) {
    try {
      const longUrl = this.urlService.decode(code);
      res.redirect(longUrl);
    } catch (e) {
      throw new NotFoundException();
    }
  }
}

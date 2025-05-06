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

@Controller()
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('api/encode')
  encode(@Body('url') longUrl: string) {
    const code = this.urlService.encode(longUrl);
    return { shortUrl: `http://localhost:3001/${code}` };
  }

  @Post('api/decode')
  decode(@Body('code') code: string) {
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

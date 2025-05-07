import { Injectable, NotFoundException } from '@nestjs/common';
import { UrlEntry } from './interfaces/url-entry.interface';
import { ConfigService } from '@nestjs/config';

const { nanoid } = require('nanoid');

@Injectable()
export class UrlService {
  private urlStore: Record<string, UrlEntry> = {};
  constructor(private config: ConfigService) {}

  encode(longUrl: string): string {
    const code = nanoid(6);
    this.urlStore[code] = {
      longUrl,
      createdAt: new Date(),
      visits: 0,
    };
    return code;
  }

  getCode(shortUrl: string): string {
    const code = shortUrl.replace(`${this.config.get('APP_DOMAIN')}/`, '');
    return code;
  }

  decode(shortUrl: string): string {
    const code = this.getCode(shortUrl);
    const entry = this.urlStore[code];
    if (!entry) throw new NotFoundException('URL not found');
    entry.visits++;
    return entry.longUrl;
  }

  getStats(code: string): UrlEntry {
    const entry = this.urlStore[code];
    if (!entry) throw new NotFoundException('URL not found');
    return entry;
  }

  list(): Record<string, UrlEntry> {
    return this.urlStore;
  }
}

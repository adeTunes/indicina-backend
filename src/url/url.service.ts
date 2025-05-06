import { Injectable, NotFoundException } from '@nestjs/common';
import { UrlEntry } from './interfaces/url-entry.interface';

const { nanoid } = require('nanoid');

@Injectable()
export class UrlService {
  private urlStore: Record<string, UrlEntry> = {};

  encode(longUrl: string): string {
    const code = nanoid(6);
    this.urlStore[code] = {
      longUrl,
      createdAt: new Date(),
      visits: 0,
    };
    return code;
  }

  decode(code: string): string {
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

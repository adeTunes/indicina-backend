import { UrlEntry } from './interfaces/url-entry.interface';
import { ConfigService } from '@nestjs/config';
export declare class UrlService {
    private config;
    private urlStore;
    constructor(config: ConfigService);
    encode(longUrl: string): string;
    getCode(shortUrl: string): string;
    decode(shortUrl: string): string;
    getStats(code: string): UrlEntry;
    list(): Record<string, UrlEntry>;
}

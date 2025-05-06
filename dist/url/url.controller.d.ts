import { UrlService } from './url.service';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class UrlController {
    private readonly urlService;
    private config;
    constructor(urlService: UrlService, config: ConfigService);
    encode(longUrl: string): {
        shortUrl: string;
    };
    decode(code: string): {
        longUrl: string;
    };
    stats(code: string): import("./interfaces/url-entry.interface").UrlEntry;
    list(): Record<string, import("./interfaces/url-entry.interface").UrlEntry>;
    redirect(code: string, res: Response): void;
}

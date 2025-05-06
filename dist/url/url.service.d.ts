import { UrlEntry } from './interfaces/url-entry.interface';
export declare class UrlService {
    private urlStore;
    encode(longUrl: string): string;
    decode(code: string): string;
    getStats(code: string): UrlEntry;
    list(): Record<string, UrlEntry>;
}

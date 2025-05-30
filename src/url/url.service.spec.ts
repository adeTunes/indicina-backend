import { Test, TestingModule } from '@nestjs/testing';
import { UrlService } from './url.service';

describe('UrlService', () => {
  let service: UrlService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UrlService],
    }).compile();

    service = module.get<UrlService>(UrlService);
  });

  it('should encode and decode URLs', () => {
    const longUrl = 'https://example.com';
    const shortCode = service.encode(longUrl);
    expect(typeof shortCode).toBe('string');

    const decoded = service.decode(shortCode);
    expect(decoded).toEqual(longUrl);
  });

  it('should track stats and list entries', () => {
    const code = service.encode('https://test.com');
    service.decode(code);
    const stats = service.getStats(code);
    expect(stats.visits).toBe(1);
    expect(stats.longUrl).toContain('https://');
  });

  it('should return all encoded URLs in list', () => {
    service.encode('https://test1.com');
    service.encode('https://test2.com');
    const list = service.list();
    expect(Object.keys(list).length).toBeGreaterThanOrEqual(2);
  });

  it('should throw when decoding unknown short code', () => {
    expect(() => service.decode('fakeCode')).toThrow();
  });
});

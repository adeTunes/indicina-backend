"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const { nanoid } = require('nanoid');
let UrlService = class UrlService {
    constructor(config) {
        this.config = config;
        this.urlStore = {};
    }
    encode(longUrl) {
        const code = nanoid(6);
        this.urlStore[code] = {
            longUrl,
            createdAt: new Date(),
            visits: 0,
        };
        return code;
    }
    getCode(shortUrl) {
        const code = shortUrl.replace(`${this.config.get('APP_DOMAIN')}/`, '');
        return code;
    }
    decode(shortUrl) {
        const code = this.getCode(shortUrl);
        const entry = this.urlStore[code];
        if (!entry)
            throw new common_1.NotFoundException('URL not found');
        entry.visits++;
        return entry.longUrl;
    }
    getStats(code) {
        const entry = this.urlStore[code];
        if (!entry)
            throw new common_1.NotFoundException('URL not found');
        return entry;
    }
    list() {
        return this.urlStore;
    }
};
exports.UrlService = UrlService;
exports.UrlService = UrlService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UrlService);
//# sourceMappingURL=url.service.js.map
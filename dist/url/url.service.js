"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlService = void 0;
const common_1 = require("@nestjs/common");
const { nanoid } = require('nanoid');
let UrlService = class UrlService {
    constructor() {
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
    decode(code) {
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
    (0, common_1.Injectable)()
], UrlService);
//# sourceMappingURL=url.service.js.map
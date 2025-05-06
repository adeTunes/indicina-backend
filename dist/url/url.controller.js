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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlController = void 0;
const common_1 = require("@nestjs/common");
const url_service_1 = require("./url.service");
const config_1 = require("@nestjs/config");
let UrlController = class UrlController {
    constructor(urlService, config) {
        this.urlService = urlService;
        this.config = config;
    }
    encode(longUrl) {
        const code = this.urlService.encode(longUrl);
        return { shortUrl: `${this.config.get('APP_DOMAIN')}/${code}` };
    }
    decode(code) {
        const longUrl = this.urlService.decode(code);
        return { longUrl };
    }
    stats(code) {
        return this.urlService.getStats(code);
    }
    list() {
        return this.urlService.list();
    }
    redirect(code, res) {
        try {
            const longUrl = this.urlService.decode(code);
            res.redirect(longUrl);
        }
        catch (e) {
            throw new common_1.NotFoundException();
        }
    }
};
exports.UrlController = UrlController;
__decorate([
    (0, common_1.Post)('api/encode'),
    __param(0, (0, common_1.Body)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "encode", null);
__decorate([
    (0, common_1.Post)('api/decode'),
    __param(0, (0, common_1.Body)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "decode", null);
__decorate([
    (0, common_1.Get)('api/statistic/:code'),
    __param(0, (0, common_1.Param)('code')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "stats", null);
__decorate([
    (0, common_1.Get)('api/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "list", null);
__decorate([
    (0, common_1.Get)(':code'),
    __param(0, (0, common_1.Param)('code')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], UrlController.prototype, "redirect", null);
exports.UrlController = UrlController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [url_service_1.UrlService,
        config_1.ConfigService])
], UrlController);
//# sourceMappingURL=url.controller.js.map
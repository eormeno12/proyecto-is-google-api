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
exports.GoogleMapsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const google_maps_dto_1 = require("../dtos/google-maps.dto");
const google_maps_service_1 = require("../services/google-maps.service");
let GoogleMapsController = class GoogleMapsController {
    constructor(googleMapsService) {
        this.googleMapsService = googleMapsService;
    }
    getHello() {
        return this.googleMapsService.getHello();
    }
    async getCoordinates(params) {
        return await this.googleMapsService.getCoordinates(params.address);
    }
    async getDirections(params) {
        return await this.googleMapsService.getDirections(params.origin, params.destination);
    }
    async search(params) {
        return await this.googleMapsService.search(params.query);
    }
};
exports.GoogleMapsController = GoogleMapsController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get hello message' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return hello message' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GoogleMapsController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)('coordinates'),
    (0, swagger_1.ApiOperation)({ summary: 'Get coordinates from address' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the coordinates from the address',
    }),
    (0, swagger_1.ApiQuery)({ name: 'address', description: 'The address to get coordinates' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_maps_dto_1.GetCoordinatesParams]),
    __metadata("design:returntype", Promise)
], GoogleMapsController.prototype, "getCoordinates", null);
__decorate([
    (0, common_1.Get)('directions'),
    (0, swagger_1.ApiOperation)({ summary: 'Get directions from origin to destination' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the directions from origin to destination',
    }),
    (0, swagger_1.ApiQuery)({ name: 'origin', description: 'The origin address' }),
    (0, swagger_1.ApiQuery)({ name: 'destination', description: 'The destination address' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_maps_dto_1.GetDirectionsParams]),
    __metadata("design:returntype", Promise)
], GoogleMapsController.prototype, "getDirections", null);
__decorate([
    (0, common_1.Get)('search'),
    (0, swagger_1.ApiOperation)({ summary: 'Search address or place by text' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Return the search result by text',
    }),
    (0, swagger_1.ApiQuery)({ name: 'query', description: 'The text to search' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [google_maps_dto_1.SearchTextParams]),
    __metadata("design:returntype", Promise)
], GoogleMapsController.prototype, "search", null);
exports.GoogleMapsController = GoogleMapsController = __decorate([
    (0, swagger_1.ApiTags)('google-maps'),
    (0, common_1.Controller)('google-maps'),
    __metadata("design:paramtypes", [google_maps_service_1.GoogleMapsService])
], GoogleMapsController);
//# sourceMappingURL=google-maps.controller.js.map
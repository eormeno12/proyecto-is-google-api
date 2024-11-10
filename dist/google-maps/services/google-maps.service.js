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
exports.GoogleMapsService = void 0;
const google_maps_services_js_1 = require("@googlemaps/google-maps-services-js");
const common_1 = require("@nestjs/common");
const config_1 = require("../../config");
let GoogleMapsService = class GoogleMapsService extends google_maps_services_js_1.Client {
    constructor(configService) {
        super();
        this.configService = configService;
        this.apiKey = this.configService.google.maps.apiKey;
    }
    getHello() {
        return 'Hello World!';
    }
    async getCoordinates(address) {
        try {
            const googleRes = await this.geocode({
                params: {
                    address,
                    key: this.apiKey,
                },
            });
            const { lat, lng } = googleRes.data.results[0].geometry.location;
            return { lat, lng };
        }
        catch {
            return {
                lat: null,
                lng: null,
            };
        }
    }
    async getDirections(origin, destination) {
        const googleRes = await this.directions({
            params: {
                origin,
                destination,
                language: google_maps_services_js_1.Language.es,
                mode: google_maps_services_js_1.TravelMode.driving,
                key: this.apiKey,
            },
        });
        return googleRes.data;
    }
    async search(query) {
        const googleRes = await this.textSearch({
            params: {
                query,
                key: this.apiKey,
                language: google_maps_services_js_1.Language.es,
            },
        });
        return googleRes.data;
    }
};
exports.GoogleMapsService = GoogleMapsService;
exports.GoogleMapsService = GoogleMapsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(config_1.default.KEY)),
    __metadata("design:paramtypes", [void 0])
], GoogleMapsService);
//# sourceMappingURL=google-maps.service.js.map
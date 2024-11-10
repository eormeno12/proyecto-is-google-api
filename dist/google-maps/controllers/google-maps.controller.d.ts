import { GetCoordinatesParams, GetDirectionsParams, SearchTextParams } from '../dtos/google-maps.dto';
import { GoogleMapsService } from '../services/google-maps.service';
export declare class GoogleMapsController {
    private googleMapsService;
    constructor(googleMapsService: GoogleMapsService);
    getHello(): string;
    getCoordinates(params: GetCoordinatesParams): Promise<{
        lat: number;
        lng: number;
    }>;
    getDirections(params: GetDirectionsParams): Promise<import("@googlemaps/google-maps-services-js").DirectionsResponseData>;
    search(params: SearchTextParams): Promise<import("@googlemaps/google-maps-services-js").TextSearchResponseData>;
}

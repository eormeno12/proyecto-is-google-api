import { Client } from '@googlemaps/google-maps-services-js';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';
export declare class GoogleMapsService extends Client {
    private configService;
    constructor(configService: ConfigType<typeof config>);
    private readonly apiKey;
    getHello(): string;
    getCoordinates(address: string): Promise<{
        lat: number;
        lng: number;
    }>;
    getDirections(origin: string, destination: string): Promise<import("@googlemaps/google-maps-services-js").DirectionsResponseData>;
    search(query: string): Promise<import("@googlemaps/google-maps-services-js").TextSearchResponseData>;
}

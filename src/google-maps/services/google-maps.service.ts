import {
  Client,
  Language,
  TravelMode,
} from '@googlemaps/google-maps-services-js';
import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from 'src/config';

@Injectable()
export class GoogleMapsService extends Client {
  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
  ) {
    super();
  }

  private readonly apiKey = this.configService.google.maps.apiKey;

  getHello(): string {
    return 'Hello World!';
  }

  async getCoordinates(address: string) {
    try {
      const googleRes = await this.geocode({
        params: {
          address,
          key: this.apiKey,
        },
      });

      const { lat, lng } = googleRes.data.results[0].geometry.location;

      return { lat, lng };
    } catch {
      return {
        lat: null,
        lng: null,
      };
    }
  }

  async getDirections(origin: string, destination: string) {
    const googleRes = await this.directions({
      params: {
        origin,
        destination,
        language: Language.es,
        mode: TravelMode.driving,
        key: this.apiKey,
      },
    });

    return googleRes.data;
  }

  async search(query: string) {
    const googleRes = await this.textSearch({
      params: {
        query,
        key: this.apiKey,
        language: Language.es,
      },
    });

    return googleRes.data;
  }
}

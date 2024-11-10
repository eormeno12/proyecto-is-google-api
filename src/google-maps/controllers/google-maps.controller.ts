import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  GetCoordinatesParams,
  GetDirectionsParams,
  SearchTextParams,
} from '../dtos/google-maps.dto';
import { GoogleMapsService } from '../services/google-maps.service';

@ApiTags('google-maps')
@Controller('google-maps')
export class GoogleMapsController {
  constructor(private googleMapsService: GoogleMapsService) {}

  @Get()
  @ApiOperation({ summary: 'Get hello message' })
  @ApiResponse({ status: 200, description: 'Return hello message' })
  getHello() {
    return this.googleMapsService.getHello();
  }

  @Get('coordinates')
  @ApiOperation({ summary: 'Get coordinates from address' })
  @ApiResponse({
    status: 200,
    description: 'Return the coordinates from the address',
  })
  @ApiQuery({ name: 'address', description: 'The address to get coordinates' })
  async getCoordinates(@Query() params: GetCoordinatesParams) {
    return await this.googleMapsService.getCoordinates(params.address);
  }

  @Get('directions')
  @ApiOperation({ summary: 'Get directions from origin to destination' })
  @ApiResponse({
    status: 200,
    description: 'Return the directions from origin to destination',
  })
  @ApiQuery({ name: 'origin', description: 'The origin address' })
  @ApiQuery({ name: 'destination', description: 'The destination address' })
  async getDirections(@Query() params: GetDirectionsParams) {
    return await this.googleMapsService.getDirections(
      params.origin,
      params.destination,
    );
  }

  @Get('search')
  @ApiOperation({ summary: 'Search address or place by text' })
  @ApiResponse({
    status: 200,
    description: 'Return the search result by text',
  })
  @ApiQuery({ name: 'query', description: 'The text to search' })
  async search(@Query() params: SearchTextParams) {
    return await this.googleMapsService.search(params.query);
  }
}

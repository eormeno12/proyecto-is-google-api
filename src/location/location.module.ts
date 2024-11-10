import { Module } from '@nestjs/common';
import { LocationGateway } from './gateways/location.gateway';

@Module({
  providers: [LocationGateway],
})
export class LocationModule {}

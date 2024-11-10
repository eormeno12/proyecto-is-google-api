import { Module } from '@nestjs/common';
import { GoogleMapsController } from './controllers/google-maps.controller';
import { GoogleMapsService } from './services/google-maps.service';

@Module({
  controllers: [GoogleMapsController],
  providers: [GoogleMapsService],
})
export class GoogleMapsModule {}

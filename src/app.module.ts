import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from './config';
import { enviroments } from './enviroments';
import { GoogleMapsModule } from './google-maps/maps.module';
import { LocationModule } from './location/location.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        GOOGLE_MAPS_API_KEY: Joi.string().required(),
      }),
    }),
    GoogleMapsModule,
    LocationModule,
  ],
})
export class AppModule {}

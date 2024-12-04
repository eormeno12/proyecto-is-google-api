import { IsString } from 'class-validator';

export class AcceptTravelDto {
  @IsString()
  travelId: string;

  @IsString()
  driverId: string;
}

import { IsString, IsNumber } from 'class-validator';

export class CreateTravelRequestDto {
  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsString()
  pickup: string;

  @IsString()
  dropoff: string;

  @IsNumber()
  price: number;

  @IsString()
  details: string;
}

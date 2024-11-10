import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetCoordinatesParams {
  @ApiProperty({ description: 'The address to get coordinates' })
  @IsNotEmpty()
  @IsString()
  address: string;
}

export class GetDirectionsParams {
  @ApiProperty({ description: 'The origin address' })
  @IsNotEmpty()
  @IsString()
  origin: string;

  @ApiProperty({ description: 'The destination address' })
  @IsNotEmpty()
  @IsString()
  destination: string;
}

export class SearchTextParams {
  @ApiProperty({ description: 'The text to search' })
  @IsNotEmpty()
  @IsString()
  query: string;
}

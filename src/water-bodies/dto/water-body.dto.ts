import {
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class PassportDto {
  @IsOptional()
  @IsNumber()
  surfaceArea?: number;

  @IsOptional()
  @IsNumber()
  maxDepth?: number;

  @IsOptional()
  @IsNumber()
  avgDepth?: number;

  @IsOptional()
  @IsNumber()
  volume?: number;

  @IsOptional()
  @IsNumber()
  catchmentArea?: number;

  @IsOptional()
  @IsNumber()
  salinity?: number;

  @IsOptional()
  @IsNumber()
  altitude?: number;

  @IsOptional()
  @IsString()
  inflow?: string;

  @IsOptional()
  @IsString()
  outflow?: string;
}

export class CreateWaterBodyDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  region: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PassportDto)
  passport?: PassportDto;
}

export class UpdateWaterBodyDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type?: string;

  @IsOptional()
  @IsString()
  region?: string;

  @IsOptional()
  @IsNumber()
  latitude?: number;

  @IsOptional()
  @IsNumber()
  longitude?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PassportDto)
  passport?: PassportDto;
}

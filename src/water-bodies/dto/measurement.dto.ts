import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMeasurementDto {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsNumber()
  waterLevel?: number;

  @IsOptional()
  @IsNumber()
  temperature?: number;

  @IsOptional()
  @IsNumber()
  pH?: number;

  @IsOptional()
  @IsNumber()
  oxygen?: number;

  @IsOptional()
  @IsNumber()
  transparency?: number;

  @IsOptional()
  @IsNumber()
  turbidity?: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

export class UpdateMeasurementDto {
  @IsOptional()
  @IsDateString()
  date?: string;

  @IsOptional()
  @IsNumber()
  waterLevel?: number;

  @IsOptional()
  @IsNumber()
  temperature?: number;

  @IsOptional()
  @IsNumber()
  pH?: number;

  @IsOptional()
  @IsNumber()
  oxygen?: number;

  @IsOptional()
  @IsNumber()
  transparency?: number;

  @IsOptional()
  @IsNumber()
  turbidity?: number;

  @IsOptional()
  @IsString()
  notes?: string;
}

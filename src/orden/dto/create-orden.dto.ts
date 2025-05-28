import { Transform } from 'class-transformer';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateOrdenDto {
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  detalles: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  total: number;

  @IsArray()
  @IsString({ each: true })
  platos: string[];
}

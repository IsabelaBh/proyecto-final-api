import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateCocineroDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  email: string;
}

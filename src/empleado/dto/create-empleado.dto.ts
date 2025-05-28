import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateEmpleadoDto {
  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  nombre: string;

  @IsEmail()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  email: string;

  @IsString()
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  puesto: string;
}

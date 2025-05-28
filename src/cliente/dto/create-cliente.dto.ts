import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Transform } from 'class-transformer';

export class CreateClienteDto {
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
  estado_cliente: string;
}

import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @Transform(({ value }: { value: string }) => value.trim())
  @IsNotEmpty()
  @IsEmail()
  email: string;
}

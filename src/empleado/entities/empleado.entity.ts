import { Usuario } from 'src/usuario/entities/usuario.entity';

export class Empleado extends Usuario {
  puesto: string;

  constructor(id: number, nombre: string, email: string, puesto: string) {
    super(id, nombre, email);
    this.puesto = puesto;
  }
}

import { Empleado } from 'src/empleado/entities/empleado.entity';

export class Cocinero extends Empleado {
  constructor(id: number, nombre: string, email: string) {
    super(id, nombre, email, 'Cocinero');
  }
}

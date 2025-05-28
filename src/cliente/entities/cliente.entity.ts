import { Usuario } from 'src/usuario/entities/usuario.entity';

export class Cliente extends Usuario {
  estado_cliente: string;

  constructor(
    id: number,
    nombre: string,
    email: string,
    estado_cliente: string,
  ) {
    super(id, nombre, email);
    this.estado_cliente = estado_cliente;
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './entities/cliente.entity';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService {
  private clientes: Cliente[] = [];
  private idCounter = 1;

  create(dto: CreateClienteDto) {
    const cliente = new Cliente(
      this.idCounter++,
      dto.nombre,
      dto.email,
      dto.estado_cliente,
    );

    this.clientes.push(cliente);

    return { ok: true, cliente };
  }

  findAll() {
    return { ok: true, clientes: this.clientes };
  }

  findOne(id: number) {
    let cliente: Cliente = null;

    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id === id) {
        cliente = this.clientes[i];
        return {
          ok: true,
          cliente,
        };
      }
    }

    throw new NotFoundException('Cliente no encontrado');
  }

  update(id: number, dto: UpdateClienteDto) {
    const { cliente } = this.findOne(id);

    cliente.nombre = dto.nombre;
    cliente.email = dto.email;
    cliente.estado_cliente = dto.estado_cliente;

    return {
      ok: true,
      message: 'El cliente fue actualizado',
    };
  }

  remove(id: number) {
    this.findOne(id);

    this.clientes = this.clientes.filter((c) => c.id !== id);

    return {
      ok: true,
      message: 'El cliente fue eliminado',
    };
  }
}

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOrdenDto } from './dto/create-orden.dto';
import { UpdateOrdenDto } from './dto/update-orden.dto';
import { CocineroService } from 'src/cocinero/cocinero.service';
import { ClienteService } from 'src/cliente/cliente.service';
import { Orden } from './entities/orden.entity';

@Injectable()
export class OrdenService {
  private ordenes: Orden[] = [];
  private idCounter = 1;

  constructor(
    private readonly cocineroSer: CocineroService,
    private readonly clienteSer: ClienteService,
  ) {}

  create(dto: CreateOrdenDto) {
    this.clienteSer.findOne(dto.cliente_id);
    this.cocineroSer.findOne(dto.concinero_id);

    const orden = new Orden(
      this.idCounter++,
      dto.detalles,
      dto.total,
      dto.platos,
      dto.concinero_id,
      dto.cliente_id,
    );

    this.ordenes.push(orden);

    return {
      ok: true,
      orden,
    };
  }

  findAll() {
    return {
      ok: true,
      ordenes: this.ordenes,
    };
  }

  findOne(id: number) {
    let orden: Orden = null;

    for (let i = 0; i < this.ordenes.length; i++) {
      if (this.ordenes[i].id === id) {
        orden = this.ordenes[i];
        return {
          ok: true,
          orden,
        };
      }
    }

    throw new NotFoundException('Orden no encontrada');
  }

  update(id: number, dto: UpdateOrdenDto) {
    const { orden } = this.findOne(id);

    this.clienteSer.findOne(dto.cliente_id);
    this.cocineroSer.findOne(dto.concinero_id);

    orden.detalles = dto.detalles;
    orden.total = dto.total;
    orden.platos = dto.platos;
    orden.concinero_id = dto.concinero_id;
    orden.cliente_id = dto.cliente_id;

    return {
      ok: true,
      message: 'La orden fue actualizada',
    };
  }

  remove(id: number) {
    this.findOne(id);

    this.ordenes = this.ordenes.filter((e) => e.id !== id);

    return {
      ok: true,
      message: 'La orden fue eliminada',
    };
  }
}

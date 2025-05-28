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

  create(dto: CreateOrdenDto) {
    const orden = new Orden(
      this.idCounter++,
      dto.detalles,
      dto.total,
      dto.platos,
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

    orden.detalles = dto.detalles;
    orden.total = dto.total;
    orden.platos = dto.platos;

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

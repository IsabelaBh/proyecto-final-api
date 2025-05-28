import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';
import { Cocinero } from './entities/cocinero.entity';

@Injectable()
export class CocineroService {
  private cocineros: Cocinero[] = [];
  private idCounter = 1;

  create(dto: CreateCocineroDto) {
    const cocinero = new Cocinero(this.idCounter++, dto.nombre, dto.email);

    this.cocineros.push(cocinero);

    return { ok: true, cocinero };
  }

  findAll() {
    return {
      ok: true,
      cocineros: this.cocineros,
    };
  }

  findOne(id: number) {
    let cocinero: Cocinero = null;

    for (let i = 0; i < this.cocineros.length; i++) {
      if (this.cocineros[i].id === id) {
        cocinero = this.cocineros[i];
        return {
          ok: true,
          cocinero,
        };
      }
    }

    throw new NotFoundException('Cocinero no encontrado');
  }

  update(id: number, dto: UpdateCocineroDto) {
    const { cocinero } = this.findOne(id);

    cocinero.nombre = dto.nombre;
    cocinero.email = dto.email;

    return {
      ok: true,
      message: 'El cocinero fue actualizado',
    };
  }

  remove(id: number) {
    this.findOne(id);

    this.cocineros = this.cocineros.filter((e) => e.id !== id);

    return {
      ok: true,
      message: 'El cocinero fue eliminado',
    };
  }
}

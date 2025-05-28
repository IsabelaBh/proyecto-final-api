import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleado } from './entities/empleado.entity';

@Injectable()
export class EmpleadoService {
  private empleados: Empleado[] = [];
  private idCounter = 1;

  create(dto: CreateEmpleadoDto) {
    const empleado = new Empleado(
      this.idCounter++,
      dto.nombre,
      dto.email,
      dto.puesto,
    );

    this.empleados.push(empleado);

    return { ok: true, empleado };
  }

  findAll() {
    return {
      ok: true,
      empleados: this.empleados,
    };
  }

  findOne(id: number) {
    let empleado: Empleado = null;

    for (let i = 0; i < this.empleados.length; i++) {
      if (this.empleados[i].id === id) {
        empleado = this.empleados[i];
        return {
          ok: true,
          empleado,
        };
      }
    }

    throw new NotFoundException('Empleado no encontrado');
  }

  update(id: number, dto: UpdateEmpleadoDto) {
    const { empleado } = this.findOne(id);

    empleado.nombre = dto.nombre;
    empleado.email = dto.email;
    empleado.puesto = dto.puesto;

    return {
      ok: true,
      message: 'El empleado fue actualizado',
    };
  }

  remove(id: number) {
    this.findOne(id);

    this.empleados = this.empleados.filter((e) => e.id !== id);

    return {
      ok: true,
      message: 'El empleado fue eliminado',
    };
  }
}

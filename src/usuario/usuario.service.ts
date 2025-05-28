import { Injectable, NotFoundException } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  private usuarios: Usuario[] = [];
  private idCounter = 1;

  create(dto: CreateUsuarioDto): { ok: boolean; usuario: Usuario } {
    const usuario = new Usuario(this.idCounter++, dto.nombre, dto.email);

    this.usuarios.push(usuario);

    return {
      ok: true,
      usuario,
    };
  }

  findAll(): { ok: boolean; usuarios: Usuario[] } {
    return {
      ok: true,
      usuarios: this.usuarios,
    };
  }

  findOne(id: number): { ok: boolean; usuario: Usuario } {
    let usuario: Usuario = null;

    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.usuarios[i].id === id) {
        usuario = this.usuarios[i];
        return {
          ok: true,
          usuario,
        };
      }
    }

    throw new NotFoundException('Usuario no encontrado');
  }

  update(id: number, dto: UpdateUsuarioDto): { ok: boolean; message: string } {
    const { usuario } = this.findOne(id);

    usuario.nombre = dto.nombre;
    usuario.email = dto.email;

    return {
      ok: true,
      message: 'El usuario fue actaulizado',
    };
  }

  remove(id: number): { ok: boolean; message: string } {
    this.findOne(id);

    this.usuarios = this.usuarios.filter((u) => u.id !== id);

    return {
      ok: true,
      message: 'El usuario fue eliminado',
    };
  }
}

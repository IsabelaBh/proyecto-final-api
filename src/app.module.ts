import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { EmpleadoModule } from './empleado/empleado.module';

@Module({
  imports: [UsuarioModule, ClienteModule, EmpleadoModule]
})
export class AppModule {}

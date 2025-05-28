import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuario/usuario.module';
import { ClienteModule } from './cliente/cliente.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { CocineroModule } from './cocinero/cocinero.module';
import { OrdenModule } from './orden/orden.module';

@Module({
  imports: [UsuarioModule, ClienteModule, EmpleadoModule, CocineroModule, OrdenModule]
})
export class AppModule {}

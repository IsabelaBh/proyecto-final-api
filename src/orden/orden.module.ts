import { Module } from '@nestjs/common';
import { OrdenService } from './orden.service';
import { OrdenController } from './orden.controller';
import { CocineroModule } from 'src/cocinero/cocinero.module';
import { ClienteModule } from 'src/cliente/cliente.module';

@Module({
  controllers: [OrdenController],
  providers: [OrdenService],
})
export class OrdenModule {}

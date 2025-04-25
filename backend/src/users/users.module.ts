import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // Exportamos el servicio para que pueda ser utilizado en otros módulos
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { ExemploController } from './controllers/exemplo.controller';
import { UsuarioController } from './controllers/usuario.controller';
import { UsuarioService } from './services/usuario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './intities/usuario.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'example',
    database: 'example',
    entities: [Usuario],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Usuario])

],
  controllers: [ExemploController, UsuarioController],
  providers: [UsuarioService],
})
export class AppModule {

}

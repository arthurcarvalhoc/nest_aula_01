import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "src/intities/usuario.entity";
import { Repository } from "typeorm";

@Injectable()
export class UsuarioService {

    
    constructor(
        @InjectRepository(Usuario)
        private repository: Repository<Usuario>,
    ){

    }

    async findAll(){
        return await this.repository.find({order: { id: "DESC"}})
    }

    save(usuario: Usuario): Promise<Usuario>{
        console.log(usuario);
        return this.repository.save(usuario);

    }


}
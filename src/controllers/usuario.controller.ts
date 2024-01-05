import { Controller, Get, Param, Render, Res } from "@nestjs/common";
import { Response } from "express";
import { Usuario } from "src/intities/usuario.entity";
import { UsuarioService } from "src/services/usuario.service";

@Controller()
export class UsuarioController {

    constructor(
        private readonly service: UsuarioService,
    ){ }


    @Get("listatodos")
    findall(){        
        return this.service.findAll()
    }

    @Get("/adduser/:username")    
    async adduser(
        @Param("username") username: string, 
        @Res() res: Response){        
        
        let usuario = new Usuario();

        usuario.login = username;
        usuario.email = `${username}@gmail.com`
        usuario.nome = username;
        usuario.senha = "123456";

        await this.service.save(usuario);
        // res.render('sucesso.ejs')

        return {usuario: username}


    }



}
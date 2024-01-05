import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller()
export class ExemploController {

    lista: { id: number; login: string; senha: string; }[];

    constructor(){        
            this.lista =   [{id: 1, login: "admin", senha:"1243"}, 
                            {id: 2, login: "test", senha:"1243"}, 
                            {id: 3,login: "standard", senha:"1243"}];

    }

    @Get("/")
    getHello(){
        return "hello";
    }

    @Get("/hello/:nome")
    helloNome(@Param("nome") n: string){
        return `Hello ${n}`
    }

    @Get("/user")
    listaUsuarios(){
        return JSON.stringify(this.lista);
    }

    @Get("/user/:id")
    listaUsuario(@Param("id") id: number){

        let user : any = "Usuario não encontrado"      
        this.lista.forEach(u => {
            if(u.id == id){
                user = u;              
            }            
        });

        console.log(user)
        return JSON.stringify(user);


    }



}
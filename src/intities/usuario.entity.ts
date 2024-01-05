import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:60})
    nome: string;

    @Column()
    login: string;

    @Column()
    email: string;

    @Column()
    senha: string;
    

}
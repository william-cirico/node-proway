import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Tarefa } from "./Tarefa";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column({ type: "varchar", unique: true })
    email: string;

    @Column()
    senha: string;

    @OneToMany(() => Tarefa, tarefa => tarefa.usuario)
    tarefas: Tarefa[];
}
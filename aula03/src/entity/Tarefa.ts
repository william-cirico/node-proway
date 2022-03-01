import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Tarefa {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column("datetime")
    expiraEm: Date;

    @Column("datetime")
    completadaEm: Date;

    @ManyToOne(() => Usuario, usuario => usuario.tarefas)
    usuario: Usuario;
}
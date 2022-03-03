import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
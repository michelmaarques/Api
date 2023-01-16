import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cursos')
export class Curso {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    nome: string

    @Column({ type: 'text', nullable: true })
    descricao: string

    @Column({ type: 'integer' })
    vagas: number

    @Column({ type: 'text' })
    modelo: string
}
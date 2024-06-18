import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Servicos {
    @PrimaryGeneratedColumn()
    servicoID: number;

    @Column({ length: 255 })
    nome: string;

    @Column({ length: 10 })
    valor: string;

    constructor(nome: string, valor: string) {
        this.nome = nome;
        this.valor = valor;
    };
};
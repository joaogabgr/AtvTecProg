import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Column } from "typeorm";
import { Clientes } from "./cliente";
import { Servicos } from "./servico";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    compraID: number | undefined;

    @ManyToOne(() => Clientes)
    @JoinColumn({ name: "clienteID" })
    cliente: Clientes;

    @ManyToOne(() => Servicos)
    @JoinColumn({ name: "servicoID" })
    servico: Servicos;

    @Column({default: null})
    quantidadeProduto: number;

    @Column({default: null})
    quantidadeServico: number;

    @Column({default: null})
    valorServico: number;

    @Column({default: null})
    valorProduto: number;

    constructor(cliente: Clientes, servico: Servicos, quantidadeProduto: number, quantidadeServico: number, valorServico: number, valorProduto: number) {
        this.cliente = cliente;
        this.servico = servico;
        this.quantidadeProduto = quantidadeProduto;
        this.quantidadeServico = quantidadeServico;
        this.valorServico = valorServico;
        this.valorProduto = valorProduto;
    }
}
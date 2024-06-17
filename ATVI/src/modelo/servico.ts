export default class Servico {
    public nome!: string
    public preco!: number
    private quantidadeConsumida = 0

    constructor (nome: string, preco: number) {
        this.nome = nome
        this.preco = preco
    }

    public set setQuantidadeConsumida(quantidadeConsumida: number) {
        this.quantidadeConsumida += quantidadeConsumida
    }

    public get getNome(): string {
        return this.nome
    }

    public get getPreco(): number {
        return this.preco
    }

    public set setNome(nome: string) {
        this.nome = nome
    }

    public set setPreco(preco: number) {
        this.preco = preco
    }
    public get getQuantidadeConsumida(): number {
        return this.quantidadeConsumida
    }
}
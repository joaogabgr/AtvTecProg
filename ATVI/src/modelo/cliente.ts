import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    public genero: string
    private cpf: CPF
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public set setServicosConsumidos(servicosConsumido: Servico) {
        this.servicosConsumidos.push(...this.servicosConsumidos, servicosConsumido)
    }

    public get getNome(): string {
        return this.nome
    }

    public set setNome(nome: string) {
        this.nome = nome
    }

    public set setNomeSocial(nomeSocial: string) {
        this.nomeSocial = nomeSocial
    }
    public get getGenero(): string {
        return this.genero
    }
    public get getPrecoTotalConsumido(): number {
        let total = 0
        this.servicosConsumidos.forEach(servico => {
            total += servico.getPreco
        })
        return total
    }
}
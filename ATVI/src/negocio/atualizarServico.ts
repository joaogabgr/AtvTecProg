import Entrada from "../io/entrada"
import Servico from "../modelo/servico"
import ListagemServicos from "./listagemServicos"

export default class AtualizarServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let ListagemServico = new ListagemServicos(this.servicos)
        ListagemServico.listar()
        console.log(`\nInício da atualização de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let servico = this.servicos.find(servico => servico.getNome == nome)
        if (servico) {
            let index = this.servicos.indexOf(servico)
            let novoNome = this.entrada.receberTexto(`Por favor informe o novo nome do serviço: `)
            let novoPreco = this.entrada.receberNumero(`Por favor informe o novo preço do serviço: `)
            this.servicos[index].setNome = novoNome
            this.servicos[index].setPreco = novoPreco
            console.log(`\nServiço atualizado com sucesso :)\n`);
        } else {
            console.log(`\nServiço não encontrado :(\n`);
        }
    }
}
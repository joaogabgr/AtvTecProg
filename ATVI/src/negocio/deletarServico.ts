import Entrada from "../io/entrada";
import Servico from "../modelo/servico";

import ListagemServicos from "./listagemServicos";
export default class DeletarServico {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
        this.entrada = new Entrada()
    }
    public deletar(): void {
        let ListagemServico = new ListagemServicos(this.servicos)
        ListagemServico.listar()
        console.log(`\nInício da exclusão de serviço`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let servico = this.servicos.find(servico => servico.getNome == nome)
        if (servico) {
            let index = this.servicos.indexOf(servico)
            this.servicos.splice(index, 1)
            console.log(`\nServiço excluído com sucesso :)\n`);
        } else {
            console.log(`\nServiço não encontrado :(\n`);
        }
    }
}
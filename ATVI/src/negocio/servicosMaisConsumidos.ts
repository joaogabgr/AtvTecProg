import Servico from "../modelo/servico";

export default class ServicosMaisConsumidos {
    private servicos: Array<Servico>
    constructor(servicos: Array<Servico>) {
        this.servicos = servicos
    }
    public listar(): void {
        console.log(`\nListagem de serviços mais consumidos`);
        let servicos = this.servicos.sort((a, b) => b.getQuantidadeConsumida - a.getQuantidadeConsumida).slice(0, 10);
        servicos.forEach((servico, index) => {
            console.log(`\n${index + 1} - Nome: ${servico.getNome} - Quantidade: ${servico.getQuantidadeConsumida}`);
        })
    }
}
import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Cadastro from "./cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>
    private entrada: Entrada
    constructor(servico: Array<Servico>) {
        super()
        this.servicos = servico
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do servico: `)
        let preco = this.entrada.receberNumero(`Por favor informe o preço do serviço: `)
        let servico = new Servico(nome, preco);
        this.servicos.push(servico)
        console.log(`\nCadastro concluído :)\n`, servico.getQuantidadeConsumida);
    }

    public cadastrarServicoPadrao(): void {
        let servico = new Servico("Corte de cabelo", 50);
        this.servicos.push(servico)
        let servico2 = new Servico("Manicure", 30);
        this.servicos.push(servico2)
        let servico3 = new Servico("Pedicure", 30);
        this.servicos.push(servico3)
        for (let i = 0; i < 30; i++) {
            let servico = new Servico(`Servico ${i+4}`, 50);
            this.servicos.push(servico);
        }
        console.log(`\nCadastro concluído :)\n`);
    }
}
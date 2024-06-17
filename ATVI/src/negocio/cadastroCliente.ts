import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Cadastro from "./cadastro";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Por favor informe o nome social do cliente: `)
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: (H ou M) `)
        let valor = this.entrada.receberTexto(`Por favor informe o número do cpf: `);
        let data = this.entrada.receberTexto(`Por favor informe a data de emissão do cpf, no padrão dd/mm/yyyy: `);
        let partesData = data.split('/')
        let ano = new Number(partesData[2].valueOf()).valueOf()
        let mes = new Number(partesData[1].valueOf()).valueOf()
        let dia = new Number(partesData[0].valueOf()).valueOf()
        let dataEmissao = new Date(ano, mes, dia)
        let cpf = new CPF(valor, dataEmissao);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído :)\n`);
    }

    public cadastrarClientePadrao(): void {
        let cliente = new Cliente("Fulano", "Fulano", new CPF("12345678909", new Date(2021, 1, 1)), "H");
        this.clientes.push(cliente)
        let cliente2 = new Cliente("Ciclano", "Ciclano", new CPF("98765432109", new Date(2021, 1, 1)), "M");
        this.clientes.push(cliente2)
        let cliente3 = new Cliente("Beltrano", "Beltrano", new CPF("12345678909", new Date(2021, 1, 1)), "H");
        this.clientes.push(cliente3)
        for (let i = 0; i < 30; i++) {
            let cliente = new Cliente(`Cliente ${i+4}`, `Cliente ${i+4}`, new CPF("12345678909", new Date(2021, 1, 1)), "H");
            this.clientes.push(cliente);
        }
        console.log(`\nCadastro concluídoc :)\n`);
    }
}
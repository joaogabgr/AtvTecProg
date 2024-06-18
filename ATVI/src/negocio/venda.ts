import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import Servico from "../modelo/servico"
import ListagemClientes from "./listagemClientes"
import ListagemServicos from "./listagemServicos"

export default class Venda {
    private clientes: Cliente[]
    private servicos: Servico[]
    private entrada: Entrada

    constructor(clientes: Cliente[], servicos: Servico[]) {
        this.clientes = clientes
        this.servicos = servicos
        this.entrada = new Entrada()
    }

    public vender() {
        let cliente = this.buscarCliente()
        let servico = this.buscarServico()
        servico.setQuantidadeConsumida = 1
        cliente.setServicosConsumidos = servico
        cliente.getServicosConsumidos.forEach(servico => {
            console.log(`\nServiço: ${servico.getNome} - Valor: ${servico.getPreco}`)
        })
    }

    private buscarCliente(): Cliente {
        let listagemClientes = new ListagemClientes(this.clientes)
        listagemClientes.listar()
        console.log(`\nSelecione o cliente Cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let cliente = this.clientes.find(cliente => cliente.getNome == nome)
        if (!cliente) {
            console.log(`\nCliente não encontrado :(\n`)
            throw new Error("Cliente não encontrado :(\n");
        }
        return cliente
    }

    private buscarServico(): Servico {
        let ListagemServico = new ListagemServicos(this.servicos)
        ListagemServico.listar()
        console.log(`\nSelecione o servico`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do serviço: `)
        let servico = this.servicos.find(servico => servico.getNome == nome)
        if (!servico) {
            console.log(`\nServiço não encontrado :(\n`)
            throw new Error("\nServiço não encontrado :(\n")
        }
        return servico
    }
}
import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import ListagemClientes from "./listagemClientes";

export default class DeletarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public deletar(): void {
        let listagemClientes = new ListagemClientes(this.clientes)
        listagemClientes.listar()
        console.log(`\nInício da exclusão de Cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let cliente = this.clientes.find(cliente => cliente.getNome == nome)
        if (cliente) {
            let index = this.clientes.indexOf(cliente)
            this.clientes.splice(index, 1)
            console.log(`\nCliente excluído com sucesso :)\n`);
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }
}
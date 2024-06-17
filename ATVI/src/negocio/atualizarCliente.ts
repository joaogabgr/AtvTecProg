import Entrada from "../io/entrada"
import Cliente from "../modelo/cliente"
import ListagemClientes from "./listagemClientes"

export default class AtualizarCliente {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public atualizar(): void {
        let listagemClientes = new ListagemClientes(this.clientes)
        listagemClientes.listar()
        console.log(`\nInício da atualização de cliente`);
        let nome = this.entrada.receberTexto(`Por favor informe o nome do cliente: `)
        let cliente = this.clientes.find(cliente => cliente.getNome == nome)
        if (cliente) {
            let index = this.clientes.indexOf(cliente)
            let novoNome = this.entrada.receberTexto(`Por favor informe o novo nome do cliente: `)
            let novoNomeSocial = this.entrada.receberTexto(`Por favor informe o novo nome social cliente: `)
            this.clientes[index].setNome = novoNome
            this.clientes[index].setNomeSocial = novoNomeSocial
            console.log(`\nCliente atualizado com sucesso :)\n`);
        } else {
            console.log(`\nCliente não encontrado :(\n`);
        }
    }
}
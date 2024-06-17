import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class ListagemClienteGenero {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nListagem de clientes por gênero`);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: (H ou M) `)
        let clientes = this.clientes.filter(cliente => cliente.getGenero == genero)
        clientes.forEach((cliente, index) => {
            console.log(`\n${index + 1} - Nome: ${cliente.getNome} - Gênero: ${cliente.getGenero}`);
        })
    }
}
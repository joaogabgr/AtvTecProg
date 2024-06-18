import Cliente from "../modelo/cliente";

export default class ListagemMaioresConsumidores {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nListagem dos maiores consumidores`);
        let maioresConsumidores = this.clientes.sort((a, b) => {
            return b.getServicosConsumidos.length - a.getServicosConsumidos.length
        }).slice(0, 10);
        maioresConsumidores.forEach((cliente, index) => {
            console.log(`\n${index + 1} - Nome: ${cliente.getNome} - Quantidade de produtos consumidos: ${cliente.getServicosConsumidos.length}`);
        })
    }
}
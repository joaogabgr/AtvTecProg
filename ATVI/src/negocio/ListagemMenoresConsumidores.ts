import Cliente from "../modelo/cliente";

export default class ListagemMenoresConsumidores {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nListagem dos menores consumidores`);
        let menoresConsumidores = this.clientes.sort((a, b) => {
            return a.getServicosConsumidos.length - b.getServicosConsumidos.length
        }).slice(0, 10);
        menoresConsumidores.forEach((cliente, index) => {
            console.log(`\n${index + 1} - Nome: ${cliente.getNome} - Quantidade de produtos consumidos: ${cliente.getServicosConsumidos.length}`);
        })
    }
}
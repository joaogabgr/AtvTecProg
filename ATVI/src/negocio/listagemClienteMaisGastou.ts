import Cliente from "../modelo/cliente";

export default class ListagemClienteMaisGastou {
    private clientes: Array<Cliente>
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
    }
    public listar(): void {
        console.log(`\nListagem dos maiores consumidores`);
        let maioresConsumidores = this.clientes.sort((a, b) => {
            return b.getPrecoTotalConsumido - a.getPrecoTotalConsumido
        }).slice(0, 10);
        maioresConsumidores.forEach((cliente, index) => {
            console.log(`\n${index + 1} - Nome: ${cliente.getNome} - Valor total consumido: ${cliente.getPrecoTotalConsumido}`);
        })
    } 
}
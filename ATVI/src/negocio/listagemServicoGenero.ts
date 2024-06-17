import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";

export default class ListagemClienteGeneroServico {
    private clientes: Array<Cliente>
    private entrada: Entrada
    constructor(clientes: Array<Cliente>) {
        this.clientes = clientes
        this.entrada = new Entrada()
    }
    public listar(): void {
        console.log(`\nListagem de clientes por gênero e se11rviço`);
        let genero = this.entrada.receberTexto(`Por favor informe o gênero do cliente: (H ou M) `)
        let clientes = this.clientes.filter(cliente => cliente.getGenero == genero)
        clientes.forEach((cliente, index) => {
            let produtosMaisConsumidos = cliente.getServicosConsumidos.sort((a, b) => b.getQuantidadeConsumida - a.getQuantidadeConsumida).slice(0, 10);
            let produtosUnicos = Array.from(new Set(produtosMaisConsumidos));
            produtosUnicos.forEach((produto) => {
            console.log(`\nProduto: ${produto.getNome} - Quantidade Consumida: ${produto.getQuantidadeConsumida}`);
            });
        });
    }
}
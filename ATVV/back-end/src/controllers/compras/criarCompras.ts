import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
import { Compra } from "../../entity/compraCliente";
import { Servicos } from "../../entity/servico";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const criarCompraCliente = async (clienteID: Clientes , servicoID: Servicos | null, quantidadeProduto: number | null, quantidadeServico: number | null, valorServico: number | null, valorProduto: number | null) => {
    try {
        const valorServicoTotal = valorServico ? valorServico * quantidadeServico : 0;
        const valorProdutoTotal = valorProduto ? valorProduto * quantidadeProduto : 0;
        const compraCliente = new Compra(clienteID, servicoID, quantidadeProduto, quantidadeServico, valorServicoTotal, valorProdutoTotal);
        await compraClienteRepositorio.save(compraCliente);
        console.log("Compra de cliente criada com sucesso");
        return compraCliente;
    } catch (error) {
        console.error("Erro na criação da compra de cliente", error);
        throw error;
    }
};
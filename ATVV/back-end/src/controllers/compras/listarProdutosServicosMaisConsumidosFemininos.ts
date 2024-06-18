import { AppDataSource } from "../../data-source";
import { Compra } from "../../entity/compraCliente";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const listarProdutosServicosMaisConsumidosFemininos = async () => {
    try {
        const produtosServicosMaisConsumidos = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .innerJoin("compraCliente.cliente", "cliente")
            .select("servicoID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .where("cliente.sexo = :sexo", { sexo: "Feminino" })
            .groupBy("servicoID")
            .orderBy("totalConsumido", "DESC")
            .getRawMany();

        console.log("Produtos e serviços mais consumidos por clientes femininos:");
        console.log(produtosServicosMaisConsumidos);

        return produtosServicosMaisConsumidos;
    } catch (error) {
        console.error("Erro na listagem dos produtos e serviços mais consumidos por clientes femininos", error);
        throw error;
    }
};
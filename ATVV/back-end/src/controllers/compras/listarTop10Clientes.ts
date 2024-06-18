import { AppDataSource } from "../../data-source";
import { Compra } from "../../entity/compraCliente";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const listarTop10Clientes = async () => {
    try {
        const top10Clientes = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .select("clienteID")
            .addSelect("SUM(COALESCE(compraCliente.quantidadeProduto, 0)) + SUM(COALESCE(compraCliente.quantidadeServico, 0))", "totalConsumido")
            .groupBy("clienteID")
            .orderBy("totalConsumido", "DESC")
            .limit(10)
            .getRawMany();

        console.log("Top 10 clientes que mais consumiram produtos ou serviços:");
        console.log(top10Clientes);

        return top10Clientes;
    } catch (error) {
        console.error("Erro na listagem dos top 10 clientes", error);
        throw error;
    }
};
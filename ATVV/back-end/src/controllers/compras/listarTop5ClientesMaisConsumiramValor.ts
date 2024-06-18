import { AppDataSource } from "../../data-source";
import { Compra } from "../../entity/compraCliente";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const listarTop5ClientesMaisConsumiramValor = async () => {
    try {
        const top5Clientes = await compraClienteRepositorio.createQueryBuilder("compraCliente")
            .select("clienteID")
            .addSelect("SUM(compraCliente.valorServico) + SUM(compraCliente.valorProduto)", "totalConsumido")
            .groupBy("clienteID")
            .orderBy("totalConsumido", "DESC")
            .limit(5)
            .getRawMany();

        console.log("Top 5 clientes que mais consumiram em valor:");
        console.log(top5Clientes);

        return top5Clientes;
    } catch (error) {
        console.error("Erro na listagem dos top 5 clientes que mais consumiram em valor", error);
        throw error;
    }
};
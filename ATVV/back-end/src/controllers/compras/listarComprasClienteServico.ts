import { AppDataSource } from "../../data-source";
import { Compra } from "../../entity/compraCliente";
import { IsNull, Not } from "typeorm";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const listarComprasClienteServico = async () => {
    try {
        const compraClientes = await compraClienteRepositorio.find({
            relations: ["cliente", "servico"],
            where: {
                servico: Not(IsNull())
            }
        });
        console.log("Compras de cliente com serviço listadas com sucesso");
        return compraClientes;
    } catch (error) {
        console.error("Erro na listagem das compras de cliente com serviço", error);
        throw error;
    }
};
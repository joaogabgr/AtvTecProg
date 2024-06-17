import { AppDataSource } from "../../data-source";
import { Compra } from "../../entity/compraCliente";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const excluirCompraCliente = async (compraID: number) => {
    try {
        const compraCliente = await compraClienteRepositorio.findOneBy({ compraID: compraID});
        if (compraCliente) {
            await compraClienteRepositorio.remove(compraCliente);
            console.log("Compra de cliente excluida com sucesso");
            return 1;
        } else {
            console.log("Compra de cliente inexistente");
            return "Compra de cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão da compra de cliente", error);
    }
}
import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const excluirCliente = async (clienteID: number) => {
    try {
        const cliente = await clienteRepositorio.findOneBy({ clienteID: clienteID});
        if (cliente) {
            await clienteRepositorio.remove(cliente);
            console.log("Cliente excluido com sucesso");
            return 1;
        } else {
            console.log("Cliente inexistente");
            return "Cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão do cliente", error);
    }
}
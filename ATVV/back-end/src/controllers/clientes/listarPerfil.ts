import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const listarPerfil = async (id: number) => {
    try {
        const clientes = await clienteRepositorio.find({ where: { clienteID: id } });
        console.log("Cliente listado com sucesso");
        return clientes;
    } catch (error) {
        console.error("Erro na listagem dos clientes", error);
        return "Erro na listagem dos clientes";
    }
}
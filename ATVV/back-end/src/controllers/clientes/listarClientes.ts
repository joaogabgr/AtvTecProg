import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const listarClientes = async () => {
    try {
        const clientes = await clienteRepositorio.find();
        console.log("Clientes listados com sucesso");
        return clientes;
    } catch (error) {
        console.error("Erro na listagem dos clientes", error);
        return "Erro na listagem dos clientes";
    }
}
import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const listarClientesFemininos = async () => {
    try {
        const clientesFemininos = await clienteRepositorio.find({ where: { sexo: 'Feminino' } });
        console.log("Lista de clientes femininos obtida com sucesso:");
        console.log(clientesFemininos);
        return clientesFemininos;
    } catch (error) {
        console.error("Erro na listagem dos clientes femininos", error);
        throw error;
    }
};
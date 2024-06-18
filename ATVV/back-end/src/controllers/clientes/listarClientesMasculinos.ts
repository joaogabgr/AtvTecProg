import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const listarClientesMasculinos = async () => {
    try {
        const clientesMasculinos = await clienteRepositorio.find({ where: { sexo: 'Masculino' } });
        console.log("Lista de clientes masculinos obtida com sucesso:");
        console.log(clientesMasculinos);
        return clientesMasculinos;
    } catch (error) {
        console.error("Erro na listagem dos clientes masculinos", error);
        throw error;
    }
};
import { AppDataSource } from "../../data-source";
import { Servicos } from "../../entity/servico";

export const servicosRepositorio = AppDataSource.getRepository(Servicos);

export const listarServico = async () => {
    try {
        const servico = await servicosRepositorio.find();
        console.log("Serviços listados com sucesso");
        return servico;
    } catch (error) {
        console.error("Erro na listagem dos servicos", error);
        return "Erro na listagem dos clientes";
    }
}
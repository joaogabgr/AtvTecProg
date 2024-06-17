import { AppDataSource } from "../../data-source";
import { Servicos } from "../../entity/servico";

export const servicosRepositorio = AppDataSource.getRepository(Servicos);

export const criarServico = async (nome: string, valor: string) => {
    try {
        const novoServico = new Servicos(nome, valor);
        await servicosRepositorio.save(novoServico);
        console.log("Serviço criado com sucesso");
        return novoServico;
    } catch (error) {
        console.error("Erro na criação do servico", error);
        return null;
    }
}
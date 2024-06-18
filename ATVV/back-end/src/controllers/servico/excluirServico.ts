import { AppDataSource } from "../../data-source";
import { Servicos } from "../../entity/servico";

export const servicosRepositorio = AppDataSource.getRepository(Servicos);

export const excluirServico = async (servicoID: number) => {
    try {
        const servico = await servicosRepositorio.findOneBy({ servicoID: servicoID });
        if (servico) {
            await servicosRepositorio.remove(servico);
            console.log("serviço excluido com sucesso");
            return 1;
        } else {
            console.log("serviço inexistente");
            return "serviço inexistente";
        }
    } catch (error) {
        console.error("Erro na exclusão do serviço", error);
    }
}

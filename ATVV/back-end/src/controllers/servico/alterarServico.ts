import { AppDataSource } from "../../data-source";
import { Servicos } from "../../entity/servico";

export const servicosRepositorio = AppDataSource.getRepository(Servicos);

export const alterarServico = async (servicoID: number, nome: string, valor: string) => {
    try {
        const servico = await servicosRepositorio.findOneBy({ servicoID: servicoID });

        if (servico) {
            servico.nome = nome;
            servico.valor = valor;

            await servicosRepositorio.save(servico);
            console.log("serviço alterado com sucesso");
            return servico;
        } else {
            console.log("serviço inexistente");
            return "serviço inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração do serviço", error);
    }
}
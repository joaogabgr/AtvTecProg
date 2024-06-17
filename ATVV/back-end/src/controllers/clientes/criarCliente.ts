import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const criarCliente = async (nome: string, cpf: string, email: string, rua: string, cidade: string, estado: string, informacoesAdicionais: string, telefone: string | null, sexo: string) => {
    try {
        const novoCliente = new Clientes(nome, cpf, email, rua, cidade, estado, informacoesAdicionais, telefone, sexo);
        await clienteRepositorio.save(novoCliente);
        console.log("Cliente criado com sucesso");
        return novoCliente;
    } catch (error) {
        console.error("Erro na criação do cliente", error);
        return null;
    }
}
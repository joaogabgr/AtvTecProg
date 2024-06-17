import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
export const clienteRepositorio = AppDataSource.getRepository(Clientes)

export const alterarCliente = async (clienteID: number, nome: string, cpf: string, email: string, rua: string, cidade: string, estado: string, telefone: string | null, sexo: string) => {
    try {
        const cliente = await clienteRepositorio.findOneBy({ clienteID: clienteID });

        if (cliente) {
            cliente.nome = nome;
            cliente.cpf = cpf;
            cliente.email = email;
            cliente.rua = rua;
            cliente.cidade = cidade;
            cliente.estado = estado;
            cliente.telefone = telefone;
            cliente.sexo = sexo;

            await clienteRepositorio.save(cliente);
            console.log("Cliente alterado com sucesso");
            return cliente;
        } else {
            console.log("Cliente inexistente");
            return "Cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração do cliente", error);
        return "Erro na alteração do cliente";
    }
}
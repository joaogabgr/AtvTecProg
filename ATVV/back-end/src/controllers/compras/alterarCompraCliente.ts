import { AppDataSource } from "../../data-source";
import { Clientes } from "../../entity/cliente";
import { Compra } from "../../entity/compraCliente";
import { Servicos } from "../../entity/servico";

export const compraClienteRepositorio = AppDataSource.getRepository(Compra)

export const alterarCompraCliente = async (compraID: number, clienteID: Clientes | null, servicoID: Servicos | null, quantidadeProduto: number | null, quantidadeServico: number | null, valorProduto: number | null, valorServico: number| null) => {
    try {
        const compraCliente = await compraClienteRepositorio.findOneBy({ compraID: compraID });

        if (compraCliente) {
            compraCliente.cliente = clienteID;
            compraCliente.servico = servicoID;
            compraCliente.quantidadeProduto = quantidadeProduto;
            compraCliente.quantidadeServico = quantidadeServico;
            compraCliente.valorProduto = valorProduto;
            compraCliente.valorServico = valorServico;

            await compraClienteRepositorio.save(compraCliente);
            console.log("Compra de cliente alterada com sucesso");
            return compraCliente;
        } else {
            console.log("Compra de cliente inexistente");
            return "Compra de cliente inexistente";
        }
    } catch (error) {
        console.error("Erro na alteração da compra de cliente", error);
        return "Erro na alteração da compra de cliente";
    }
}
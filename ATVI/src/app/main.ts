import Entrada from "../io/entrada";
import Cliente from "../modelo/cliente";
import CPF from "../modelo/cpf";
import Empresa from "../modelo/empresa"
import AtualizarCliente from "../negocio/atualizarCliente";
import AtualizarServico from "../negocio/atualizarServico";
import CadastroCliente from "../negocio/cadastroCliente";
import CadastroServico from "../negocio/cadastroServico";
import DeletarCliente from "../negocio/deletarCliente";
import DeletarServico from "../negocio/deletarServico";
import ListagemClienteGenero from "../negocio/listagemClienteGenero";
import ListagemClienteMaisGastou from "../negocio/listagemClienteMaisGastou";
import ListagemClientes from "../negocio/listagemClientes";
import ListagemMaioresConsumidores from "../negocio/ListagemMaioresConsumidores";
import ListagemMenoresConsumidores from "../negocio/ListagemMenoresConsumidores";
import ListagemClienteGeneroServico from "../negocio/listagemServicoGenero";
import ListagemServicos from "../negocio/listagemServicos";
import ServicosMaisConsumidos from "../negocio/servicosMaisConsumidos";
import Venda from "../negocio/venda";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Deletar cliente`);
    console.log(`4 - Atualizar cliente`);
    console.log(`5 - Cadastrar serviço`);
    console.log(`6 - Listar todos os serviços`);
    console.log(`7 - Deletar serviço`);
    console.log(`8 - Atualizar serviço`);
    console.log(`9 - Vender`);
    console.log(`10 - Listar maiores consumidores`);
    console.log(`11 - Listar clientes por gênero`);
    console.log(`12 - Listar serviços mais consumidos`);
    console.log(`13 - Listar serviços mais consumidos por gênero`);
    console.log(`14 - Listar menores consumidores`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)    

    let cadastroClientesPadroes = new CadastroCliente(empresa.getClientes)
    cadastroClientesPadroes.cadastrarClientePadrao()

    let cadastroServicosPadroes = new CadastroServico(empresa.getServicos)
    cadastroServicosPadroes.cadastrarServicoPadrao()

    switch (opcao) {
        case 1:
            let cadastroCliente = new CadastroCliente(empresa.getClientes)
            cadastroCliente.cadastrar()
            break;
        case 2:
            let listagemClientes = new ListagemClientes(empresa.getClientes)
            listagemClientes.listar()
            break;
        case 3:
            let deletarCliente = new DeletarCliente(empresa.getClientes)
            deletarCliente.deletar()
            break;
        case 4:
            let atualizarCliente = new AtualizarCliente(empresa.getClientes)
            atualizarCliente.atualizar()
            break; 
        case 5:
            let cadastroServico = new CadastroServico(empresa.getServicos)
            cadastroServico.cadastrar()
            break;
        case 6:
            let ListagemServico = new ListagemServicos(empresa.getServicos)
            ListagemServico.listar()
            break;
        case 7:
            let deletarServico = new DeletarServico(empresa.getServicos)
            deletarServico.deletar()
            break;
        case 8:
            let atualizarServico = new AtualizarServico(empresa.getServicos)
            atualizarServico.atualizar()
            break;
        case 9:
            let venda = new Venda(empresa.getClientes, empresa.getServicos)
            venda.vender()
            break
        case 10:
            let listagemMaioresConsumidores = new ListagemMaioresConsumidores(empresa.getClientes)
            listagemMaioresConsumidores.listar()
            break;
        case 11:
            let listagemClientesGenero = new ListagemClienteGenero(empresa.getClientes)
            listagemClientesGenero.listar()
            break;
        case 12:
            let servicosMaisConsumidos = new ServicosMaisConsumidos(empresa.getServicos)
            servicosMaisConsumidos.listar()
            break;
        case 13:
            let listagemClienteGeneroServico = new ListagemClienteGeneroServico(empresa.getClientes)
            listagemClienteGeneroServico.listar()
            break;
        case 14:
            let listagemMenoresConsumidores = new ListagemMenoresConsumidores(empresa.getClientes)
            listagemMenoresConsumidores.listar()
            break;
        case 15:
            let listagemClienteMaisGastou = new ListagemClienteMaisGastou(empresa.getClientes)
            listagemClienteMaisGastou.listar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}
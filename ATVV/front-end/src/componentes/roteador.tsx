import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./cliente/formularioCliente";
import ListaCliente from "./listagem/listaCliente";
import ListaServicos from "./listagem/listaServiços";
import FormularioCadastroServico from "./serviço/cadastroServico";
import Cadastro from "./cadastro";
import FormularioCadastroCompraServico from "./comprar/cadastroComprarServico";
import ListaCompraServico from "./listagem/listaCompraServico";
import Listas from "./listas";
import Lista10Consumidos from "./listagem/lista10Consumidos";
import ListaClientesMasculinos from "./listagem/listaClientesMasculinos";
import ListaClientesFemininos from "./listagem/listaClientesFemininos";
import ListaMaisConsumidos from "./listagem/listaMaisConsumidos";
import ListaMaisConsumidosMasculino from "./listagem/listaMaisConsumidosMasculino";
import ListaMaisConsumidosFeminino from "./listagem/listaMaisConsumidosFeminino";
import Lista10MenosConsumidos from "./listagem/lista10MenosConsumidos";
import Lista5MaisGasto from "./listagem/lista5ConsumidoValor";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Cadastros'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="black" 
        botoes={['Cadastros', 'Listas']} />
        if (this.state.tela === 'Cadastros') {
            return (
                <>
                    {barraNavegacao}
                    <Cadastro seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'CadastroServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroServico tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroCliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="black"/>
                </>
            )
        } else if (this.state.tela === 'CadastroCompraServico') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCompraServico tema="black"/>
                </>
            )
        } else if (this.state.tela === 'Listas') {
            return (
                <>
                    {barraNavegacao}
                    <Listas seletorView={this.selecionarView} />
                </>
            )
        } else if (this.state.tela === 'ListaCliente') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListaServico') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServicos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListagemComprasServico') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCompraServico tema="black"/>
                </>
            )
        } else if (this.state.tela === 'Listagem10Consumidores') {
            return (
                <>
                    {barraNavegacao}
                    <Lista10Consumidos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListagemClientesMasculinos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientesMasculinos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListagemClientesFemininos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaClientesFemininos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListagemMaisConsumidos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaisConsumidos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListagemMaisConsumidosMasculino') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaisConsumidosMasculino tema="black"/>
                </>
            )
        } else if (this.state.tela === 'ListagemMaisConsumidosFeminino') {
            return (
                <>
                    {barraNavegacao}
                    <ListaMaisConsumidosFeminino tema="black"/>
                </>
            )
        } else if (this.state.tela === 'Listagem10MenosConsumidores') {
            return (
                <>
                    {barraNavegacao}
                    <Lista10MenosConsumidos tema="black"/>
                </>
            )
        } else if (this.state.tela === 'Listagem5MaisGasto') {
            return (
                <>
                    {barraNavegacao}
                    <Lista5MaisGasto tema="black"/>
                </>
            )
        }
}
}
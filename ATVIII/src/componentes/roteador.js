import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaClientes from "./listaClientes";
import Home from "./home";
import FormularioCadastroProduto from "./formularioCadastroProduto";

export default function Roteador() {
    const [tela, setTela] = useState('Home')
    const botoes = ['Home', 'Clientes', 'Cadastro Cliente', 'Cadastro Produto']

    const seletorView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {

        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="black lighten-4" botoes={botoes} />
                    <ListaClientes tema="black lighten-4" />
                </>
            )
        } else if (tela === 'Cadastro Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="black lighten-4" botoes={botoes} />
                    <FormularioCadastroCliente tema="black lighten-4" />
                </>
            )
        } else if (tela === 'Cadastro Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="black lighten-4" botoes={botoes} />
                    <FormularioCadastroProduto tema="black lighten-4" />
                </>
            )
        } else {
            return (
                <>
                    <BarraNavegacao seletorView={seletorView} tema="black lighten-4" botoes={botoes} />
                    <Home />
                </>
            )
        }
    }

    return (
        construirView()
    )
}
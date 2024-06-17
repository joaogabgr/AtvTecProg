/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";

type Props = {
    tema: string,
    botoes: string[],
    seletorView: Function
}

export default class BarraNavegacao extends Component<Props> {
    constructor(props: Props | Readonly<Props>) {
        super(props);
        this.gerarListaBotoes = this.gerarListaBotoes.bind(this);
    }

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            let elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
    }

    gerarListaBotoes() {
        if (this.props.botoes.length <= 0) {
            return <></>;
        } else {
            let lista = this.props.botoes.map(valor =>
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <li key={valor}><a onClick={(e) => this.props.seletorView(valor, e)}> {valor} </a></li>
            );
            return lista;
        }
    }

    render() {
        return (
            <>
            <style>
                {`
                    header {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 20px;
                        background-color: #333;
                        color: white;
                    }
                    nav {
                        display: flex;
                        gap: 20px;
                    }
                    a {
                        color: white;
                        text-decoration: none;
                    }
                    a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
            <header>
                <h1>WB</h1>
                <ul>
                    {this.gerarListaBotoes()}
                </ul>
            </header>
            </>
        );
    }
}
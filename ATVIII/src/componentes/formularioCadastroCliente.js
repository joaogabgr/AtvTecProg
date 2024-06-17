export default function FormularioCadastroCliente(props){
    const estiloBotao = `btn waves-effect waves-light ${props.tema}`
    return (
        <div className="row">
        <style>
            {`
            div.row {
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }
            .row .col.s6 {
                margin-left: 0px !important;
            }
            .waves-effect{
                display: flex;
                justify-content: center;
                margin: auto;
            }
            `}
        </style>
        <h2>Cadastro de Cliente</h2>
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">nome</label>
                </div>
                <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label htmlFor="last_name">sobrenome</label>
                </div>
            </div>
            <div className="row">
                <div className="input-field col s6">
                    <input id="telefone" type="text" className="validate" />
                    <label htmlFor="telefone">telefone</label>
                </div>
                <div className="input-field col s6">
                    <input id="email" type="email" className="validate" />
                    <label htmlFor="email">e-mail</label>
                </div>
            </div>
            <div className="row">
                <div className="col s12">
                    <button className={estiloBotao} type="submit" name="action">Submit
                        <i className="material-icons right">send</i>
                    </button>
                </div>
            </div>
        </form>
    </div>
    )
}
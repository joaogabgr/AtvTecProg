export default function FormularioCadastroProduto(props){
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
        <h2>Cadastro de Produto</h2>
        <form className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label htmlFor="first_name">nome</label>
                </div>
                <div className="input-field col s6">
                    <input id="price" type="number" className="validate" />
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
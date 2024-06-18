type props = {
    seletorView: Function
}

function Cadastro(props: props) {
    return(
        <>
        <style>
            {`
            .cadastro-title {
                text-align: center;
                margin-top: 50px;
            }

            .opcoes-cadastro {
                display: flex;
                justify-content: center;
                margin-top: 20px;
            }

            .opcoes-cadastro {
                display: flex;
                flex-direction: column;
                margin: 0 10px;
                align-items: center;
            }

            .opcoes-cadastro button {
                margin: 5px 0;
                padding: 10px;
                cursor: pointer;
                width: 200px;
            }
            `}
        </style>
            <h3 className="cadastro-title">O que deseja cadastrar?</h3>
            <div className="opcoes-cadastro">
                <button onClick={(e) => props.seletorView('CadastroCliente', e)}>Clientes</button>
                <button onClick={(e) => props.seletorView('CadastroServico', e)}>Serviços</button>
                <button onClick={(e) => props.seletorView('CadastroCompraServico', e)}>Compras de Serviços</button>
            </div>
        </>
    )
}

export default Cadastro
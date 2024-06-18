type props = {
    seletorView: Function
}

function Listas(props: props) {
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

            .opcoes-cadastro-column {
                display: flex;
                flex-direction: column;
                margin: 0 10px;
            }

            .opcoes-cadastro-column button {
                margin: 5px 0;
                padding: 10px;
                cursor: pointer;
            }
            `}
        </style>
            
        <h3 className="cadastro-title">O que deseja Listar?</h3>
        <div className="opcoes-cadastro">
            <div className="opcoes-cadastro-column">
                <button onClick={(e) => props.seletorView('ListaCliente', e)}>Clientes</button>
                <button onClick={(e) => props.seletorView('ListaServico', e)}>Serviços</button>
                <button onClick={(e) => props.seletorView('ListagemComprasServico', e)}>Compras Serviço</button>
                <button onClick={(e) => props.seletorView('Listagem10Consumidores', e)}>Lista 10 mais consumidores</button>
                <button onClick={(e) => props.seletorView('Listagem10MenosConsumidores', e)}>Lista 10 menos consumidores</button>
            </div>
            <div className="opcoes-cadastro-column">
                <button onClick={(e) => props.seletorView('ListagemClientesMasculinos', e)}>Lista de clientes masculinos</button>
                <button onClick={(e) => props.seletorView('ListagemClientesFemininos', e)}>Lista de clientes femininos</button>
                <button onClick={(e) => props.seletorView('ListagemMaisConsumidos', e)}>Lista dos mais consumidos</button>
                <button onClick={(e) => props.seletorView('ListagemMaisConsumidosMasculino', e)}>Lista dos serviços mais consumidos clientes masculinos</button>
                <button onClick={(e) => props.seletorView('ListagemMaisConsumidosFeminino', e)}>Lista dos serviços mais consumidos clientes feminino</button>
                <button onClick={(e) => props.seletorView('Listagem5MaisGasto', e)}>Lista de 5 cliente que mais gastaram</button>
            </div>
        </div>
        </>
    )
}

export default Listas;

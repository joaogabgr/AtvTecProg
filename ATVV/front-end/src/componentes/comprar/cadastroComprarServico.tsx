import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import ICliente from '../../types/Icliente';
import IServico from '../../types/IServico';

type Props = {
    tema: string
}

// eslint-disable-next-line no-empty-pattern
function FormularioCadastroCompraServico({ }: Props) {
    const [clientes, setClientes] = useState<ICliente[]>([]);
    const [clienteSelecionado, setClienteSelecionado] = useState('');
    const [servicoSelecionado, setServicoSelecionado] = useState('');
    const [valorServico, setValorServico] = useState('');
    const [quantidadeServico, setQuantidadeServico] = useState<number>(1);
    const [servicos, setServicos] = useState<IServico[]>([]);

    useEffect(() => {
        const fetchCompra = async () => {
            try {
                const clientesResponse = await axios.get('http://localhost:5555/clientes/listar');
                setClientes(clientesResponse.data);

                const servicosResponse = await axios.get('http://localhost:5555/servicos/listar');
                setServicos(servicosResponse.data);
            } catch (error) {
                console.error('Erro ao buscar clientes', error);
            }
        };
        
        fetchCompra();
    }, []);

    const cadastrar = async () => {
        console.log('clienteSelecionado', clienteSelecionado);
        console.log('servicoSelecionado', servicoSelecionado);
        
        if (!clienteSelecionado || !servicoSelecionado) {
            Swal.fire({
                title: "Erro!",
                text: "Selecione um cliente e um serviço antes de cadastrar!",
                icon: "error",
                confirmButtonColor: 'red'
            });
            return;
        }

        try {
            console.log('valorServico', valorServico);            
            await axios.post('http://localhost:5555/comprar/cadastrar', {
                clienteID: clienteSelecionado,
                servicoID: servicoSelecionado,
                quantidadeServico,
                valorServico
            });

            Swal.fire({
                title: "Compra cadastrada com sucesso!",
                icon: "success",
                confirmButtonColor: 'green'
            }).then(() => {
                window.location.reload();
            });
        } catch (error) {
            console.error('Erro ao cadastrar compra', error);
        }
    };

    const handleValorServico = async (servicoID: string) => {
        setServicoSelecionado(servicoID);
        console.log('servico', servicoSelecionado);
        const servico = servicos.find(servico => Number(servico.servicoID) === Number(servicoID));
        
        if (servico) {
            setValorServico(servico.valor);
        }
    }

    return (
        
        <div className="container-fluid">
            <style>
                {`
                .cadastro-title {
                    text-align: center;
                    margin-top: 50px;
                }
                .container-fluid {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .form-group {
                    margin-top: 20px;
                    width: 50% !important;
                }
                .btn {
                    margin-top: 20px;
                }
                `}
            </style>
        <form>

        <div className="form-group">
                <label htmlFor="servico">Selecione o cliente:</label>
                <div className="servico-list">
                    <select onChange={(e) => setClienteSelecionado(e.target.value)} name="cliente" id="cliente" style={{ display: 'block' }}>
                        <option>Selecione o cliente</option>
                    {clientes.map((cliente) => (
                        <option value={cliente.clienteID}>{cliente.nome}</option>
                    ))}
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="servico">Selecione o serviço:</label>
                <div className="servico-list">
                    <select onChange={async (e) => await handleValorServico(e.target.value)} name="servico" id="servico" style={{ display: 'block' }}>
                        <option>Selecione o serviço</option>
                    {servicos.map((servico) => (
                        <option key={servico.servicoID} value={servico.servicoID}>{servico.nome}</option>
                    ))}
                    </select>
                </div>
            </div>
            <label htmlFor='quantidade'>Quantidade de serviço: </label>
            <input className='form-group'
                type="number"
                value={quantidadeServico}
                onChange={(e) => setQuantidadeServico(parseInt(e.target.value))}
            />
            <button className="btn btn-primary" onClick={cadastrar}>Cadastrar</button>
        </form>
        </div>
    );
}

export default FormularioCadastroCompraServico;
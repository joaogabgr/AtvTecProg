import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import EditarCliente from "./editarCliente";
import Swal from "sweetalert2";
import axios from "axios";
import ICliente from "../../types/Icliente";

function Cliente(cliente: ICliente) {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    function deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o cliente?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axios.delete('http://localhost:5555/clientes/excluir/' + cliente.clienteID, {data: {id: cliente.clienteID}})
                if (response.data === 1) {
                    Swal.fire({
                        title: "Cliente excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: 'green'
                    }).then(() => {
                        window.location.reload()
                    })
                } else {
                    Swal.fire({
                        title: "Erro ao excluir o usuario!",
                        icon: "error",
                        confirmButtonColor: 'red'
                    }).then(() => {
                        window.location.reload()
                    })
                }
            }
          });
    }

    return(
        <div className="list-group-item list-group-item-action">
                <style>
                {`
                .item-listado{
                    margin: 40px 0 40px 30px;
                }
                .cliente-details{
                    margin-top: -30px;
                }
                .detalhes{
                    margin-left: 40px;
                }
                .acoes svg{
                    margin-right: 20px;
                    font-size: 17px;
                    cursor: pointer;
                }
                `}
            </style>
            <div className="item-listado">
                    <div className="cliente-details">
                        <h5> Cliente: {cliente.nome}</h5>
                    <div className="acoes">
                        <EditarCliente 
                            clienteID={cliente.clienteID}
                            nome={cliente.nome}
                            email={cliente.email}
                            cpf={cliente.cpf}
                            sexo={cliente.sexo}
                            rua={cliente.rua}
                            telefone={cliente.telefone}
                            cidade={cliente.cidade}
                            estado={cliente.estado}
                            informacoesAdicionais={cliente.informacoesAdicionais}
                        ></EditarCliente>
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h6>Informações básicas</h6>
                            <div>ID: {cliente.clienteID}</div>
                            <div>Nome Completo: {cliente.nome}</div>
                            <div>Email: {cliente.email}</div>
                            <div>Telefone: {cliente.telefone}</div>
                            <div>CPF: {cliente.cpf}</div>
                            <div>Sexo: {cliente.sexo}</div>
                        </div>                            
                    <div className="detalhes">
                        <h6>Endereço</h6>
                            <div>Rua: {cliente.rua}</div>
                            <div>Cidade: {cliente.cidade}</div>
                            <div>Estado: {cliente.estado}</div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Cliente;
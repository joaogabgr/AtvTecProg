import { useState } from "react";
import { BsChevronDown, BsXLg } from 'react-icons/bs';
import Swal from 'sweetalert2';
import EditarServico from "./editarServico";
import axios from "axios";
import IServico from "../../types/IServico";

function Servico(props: IServico) {

    const [show, setShow] = useState(false)
    const toggleShow = () => setShow(!show)

    function deletar() {
        Swal.fire({
            title: "Deseja realmente excluir o serviço?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: "firebrick",
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await axios.delete('http://localhost:5555/servicos/excluir/' + props.servicoID, {data: {id: props.servicoID}})
                if (response.data === 1) {
                    Swal.fire({
                        title: "Serviço excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: "green"
                    }).then(() => {
                        window.location.reload()
                    })
                } else {
                    Swal.fire({
                        title: "Erro ao excluir o serviço!",
                        icon: "error",
                        confirmButtonColor: "green"
                    }).then(() => {
                        window.location.reload()
                    })
                }
            }
        });
}

    return (
        <>
        <style>
        <style>
                {`
                .item-listado{
                    margin: 40px 0 40px 30px;
                }
                .detalhes{
                    margin-top: -30px;
                    margin-left: 40px;
                }
                .acoes svg{
                    margin-right: 20px;
                    font-size: 17px;
                    cursor: pointer;
                }
                `}
            </style>
        </style>
        <div className="list-group-item list-group-item-action">
            <div className="item-listado">
                <div className="cliente-details">
                    <h5>Produto: {props.nome}</h5>
                <div className="acoes">
                    <EditarServico
                        servicoID={props.servicoID}
                        nome={props.nome}
                        valor={props.valor}
                        ></EditarServico>
                    <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                    <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
                </div>
            </div>
            {show &&
            <div>
                <div className="cliente-details">
                <div className="detalhes">
                    <h3>Informações basicas</h3>
                    <div><b>ID: </b>{props.servicoID}</div>
                        <div><b>Nome: </b>{props.nome}</div>
                        <div><b>Valor: </b>{props.valor}</div>
                    </div>
                    </div>
                </div>
            }
        </div>
        </>
    )
}

export default Servico;
import { useState } from "react";
import { BsXLg } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import Swal from "sweetalert2";
import axios from "axios";
import IcompraCliente, { IcompraClienteProduto, IcompraClienteServico } from "../../types/IcompraCliente";

function CompraServico(cliente: IcompraClienteServico) {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    function deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir a compra?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:5555/comprar/excluir/' + cliente.compraID, {data: {id: cliente.compraID}})
                .then(() => {
                    Swal.fire({
                        title: "Cliente excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: 'green'
                    }).then(() => {
                        window.location.reload()
                    })
                })
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
                        <h5> Cliente: {cliente.cliente.nome}</h5>
                    <div className="acoes">
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h3>Informações básicas</h3>
                            <div><b>Cliente ID: </b>{cliente.cliente.nome}</div>
                            <div><b>Serviço ID: </b>{cliente.servico.nome}</div>
                        </div>                            
                    <div className="detalhes">
                        <h3>Compra</h3>
                            <div><b>Quantidade do serviço: </b>{cliente.quantidadeServico}</div>
                            <div><b>Valor do serviço: </b>{cliente.valorServico}</div>
                    </div>
                </div>
            }
        </div>
    );
}

function CompraProduto(cliente: IcompraClienteProduto) {
    const [show, setShow] = useState(false);

    const toggleShow = () => setShow(!show);

    function deletar() {
        Swal.fire({
            title: "Tem certeza que quer excluir o cliente?",
            showCancelButton: true,
            confirmButtonText: "Excluir",
            confirmButtonColor: 'firebrick',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:5555/comprar/excluir/' + cliente.compraID, {data: {id: cliente.compraID}})
                .then(() => {
                    Swal.fire({
                        title: "Cliente excluído com sucesso!",
                        icon: "success",
                        confirmButtonColor: 'green'
                    }).then(() => {
                        window.location.reload()
                    })
                })
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
                        <h5> Cliente: {cliente.cliente.nome}</h5>
                    <div className="acoes">
                        <BsXLg className="icone" style={{color: 'red'}} onClick={deletar}/>
                        <BsChevronDown onClick={toggleShow} className="icone"/>
                    </div>
            </div>
            </div>
            {show && 
                <div className="cliente-details">
                    <div className="detalhes">
                        <h6>Informações básicas</h6>
                            <div>Compra ID: {cliente.compraID}</div>
                            <div>Cliente: {cliente.cliente.nome}</div>
                            <div>Produto: {cliente.produto.nome}</div>
                        </div>                            
                    <div className="detalhes">
                        <h6>Compra</h6>
                            <div>Quantidade: {cliente.quantidadeProduto}</div>
                            <div>Valor do produto: {cliente.valorProduto}</div>
                    </div>
                </div>
            }
        </div>
    );
}

function Lista10Consumidos(cliente: IcompraCliente) {
}

export { CompraProduto, CompraServico, Lista10Consumidos };

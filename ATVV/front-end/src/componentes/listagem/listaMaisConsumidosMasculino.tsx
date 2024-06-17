import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
    tema: string;
}

interface IListaMaisConsumidosMasculino {
    servicoID: string;
    produtoID: string;
    totalConsumido: number;
}

const ListaMaisConsumidosMasculino: React.FC<Props> = ({ tema }) => {
    const [lista, setLista] = useState<IListaMaisConsumidosMasculino[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/comprar/listarMaisConsumidosMasculino`);
                setLista(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista dos mais consumidos clientes masculinos: </h5><br />
            <div className='collection'>
                {lista.map((item, index) => (
                    <div key={index} className='collection-item'>
                       {item.servicoID ? `ID: ${item.servicoID}` : `ID: ${item.produtoID}`}<br />
                        Total Consumido: {item.totalConsumido}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ListaMaisConsumidosMasculino;

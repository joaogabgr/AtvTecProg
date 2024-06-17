import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
    tema: string;
}

interface IListaMaisConsumidos {
    produtoID: string;
    servicoID: string;
    totalConsumido: number;
}

const ListaMaisConsumidos: React.FC<Props> = ({ tema }) => {
    const [lista, setLista] = useState<IListaMaisConsumidos[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:5555/comprar/listarMaisConsumidos`);
                setLista(response.data);
            } catch (error) {
                console.error('Erro ao buscar compras', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <h5 className='center-align'>Lista dos mais consumidos: </h5><br />
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

export default ListaMaisConsumidos;

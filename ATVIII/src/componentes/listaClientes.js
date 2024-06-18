/* eslint-disable jsx-a11y/anchor-is-valid */
export default function ListaClientes(props) {
    const estilo = `collection-item active ${props.tema}`
    return (
        <div className="collection">
                <a className="collection-item">João Gabriel</a>
                <a className={estilo}>Henrique Godoy</a>
                <a className="collection-item">Maicon Michael</a>
                <a className="collection-item">Ana Clara</a>
                <a className="collection-item">Eduardo</a>
                <a className="collection-item">Larissa</a>
                <a className="collection-item">Lucas</a>
                <a className="collection-item">Maria</a>
        </div>
    )
}
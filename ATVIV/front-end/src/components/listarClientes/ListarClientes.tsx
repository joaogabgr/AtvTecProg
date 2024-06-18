import { useEffect, useState } from "react";
import { IListaClientes } from "../../types/ListaClientes";
import axios from "axios";
import { erro, options, success, warning } from "../swal/swal";
import "./style.css";

export default function ListarClientes() {
  const [clientes, setClientes] = useState<IListaClientes[]>([]);
  const [cliente, setCliente] = useState<IListaClientes | undefined>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    const getClientes = async () => {
      const response = await fetch("http://localhost:32832/clientes");
      const data = await response.json();
      setClientes(data);
    };
    getClientes();
  }, []);

  const deleteCliente = async (id: number) => {
    try {
      const result = await options("Deseja realmente excluir o cliente?");
      if (result.isConfirmed) {
        await axios.delete(`http://localhost:32832/cliente/excluir`, {
          data: { id: id },
        });
        setClientes(clientes.filter((cliente) => cliente.id !== id));
        success("Cliente excluído com sucesso!");
      } else if (result.isDenied) {
        erro("Exclusão cancelada.");
      }
    } catch (error) {
      console.error("Erro ao excluir cliente:", error);
      erro("Erro ao excluir cliente.");
    }
  };

  const perfilCliente = async (id: number) => {
    const response = await fetch("http://localhost:32832/cliente/" + id);
    const data = await response.json();
    setCliente(data);
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (cliente) {
      if (name.startsWith("endereco")) {
        setCliente({
          ...cliente,
          endereco: {
            ...cliente.endereco,
            [name.split("endereco")[1].toLowerCase()]: value,
          },
        });
      } else if (name.startsWith("telefone")) {
        const index = parseInt(name.charAt(8), 10);
        const field = name.slice(9).toLowerCase();
        const newTelefones = [...cliente.telefones];
        newTelefones[index][field] = value;
        setCliente({
          ...cliente,
          telefones: newTelefones,
        });
      } else {
        setCliente({
          ...cliente,
          [name]: value,
        });
      }
    }
  };

  const handleUpdateCliente = async () => {
    try {
      if (cliente) {
        await axios.put(`http://localhost:32832/cliente/atualizar`, cliente);
        setClientes(clientes.map((c) => (c.id === cliente.id ? cliente : c)));
        success("Cliente atualizado com sucesso!");
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Erro ao atualizar cliente:", error);
      erro("Erro ao atualizar cliente.");
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      <h1>Lista clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <p>Nome: {cliente.nome}</p>
            <button onClick={() => perfilCliente(cliente.id)}>Perfil</button>
            <button onClick={() => deleteCliente(cliente.id)}>Deletar</button>
          </li>
        ))}
      </ul>
      <h1>Cliente</h1>
      {cliente === undefined ? (
        <p>Selecione um cliente</p>
      ) : isEditing ? (
        <form className="editarCliente">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={cliente.nome}
            onChange={handleInputChange}
          />
          <label>Sobrenome:</label>
          <input
            type="text"
            name="sobreNome"
            value={cliente.sobreNome}
            onChange={handleInputChange}
          />
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={cliente.email || ""}
            onChange={handleInputChange}
          />
          <p>Telefone:</p>
          <div>
            {cliente.telefones.map((telefone, index) => (
              <div key={telefone.id}>
                <label>DDD: </label>
                <input
                  type="text"
                  name={`telefone${index}DDD`}
                  value={telefone.ddd}
                  onChange={handleInputChange}
                />
                <br />
                <label>Numero: </label>
                <input
                  type="text"
                  name={`telefone${index}Numero`}
                  value={telefone.numero}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
          <p>Endereço:</p>
          <label>Estado:</label>
          <input
            type="text"
            name="enderecoEstado"
            value={cliente.endereco.estado}
            onChange={handleInputChange}
          />
          <label>Cidade:</label>
          <input
            type="text"
            name="enderecoCidade"
            value={cliente.endereco.cidade}
            onChange={handleInputChange}
          />
          <label>Bairro:</label>
          <input
            type="text"
            name="enderecoBairro"
            value={cliente.endereco.bairro}
            onChange={handleInputChange}
          />
          <label>Rua:</label>
          <input
            type="text"
            name="enderecoRua"
            value={cliente.endereco.rua}
            onChange={handleInputChange}
          />
          <label>Numero:</label>
          <input
            type="text"
            name="enderecoNumero"
            value={cliente.endereco.numero}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleUpdateCliente}>Salvar</button>
          <button type="button" onClick={handleCancelEdit}>Cancelar</button>
        </form>
      ) : (
        <div>
          <p>ID: {cliente.id}</p>
          <p>Nome: {cliente.nome}</p>
          <p>Sobrenome: {cliente.sobreNome}</p>
          <p>
            Email: {cliente.email === null ? "Não informado" : cliente.email}
          </p>
          <p>
            Telefone:{" "}
            {cliente.telefones
              .map((telefone) => `${telefone.ddd}-${telefone.numero}`)
              .join(", ")}
          </p>
          <p>
            Endereço: {cliente.endereco.rua}, {cliente.endereco.numero},{" "}
            {cliente.endereco.bairro}, {cliente.endereco.cidade},{" "}
            {cliente.endereco.estado}
          </p>
        </div>
      )}
    </div>
  );
}

import { erro, success } from "./swal/swal";

export default function CadastrarClientes() {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget as HTMLFormElement;
        const data = new FormData(form);
        const cliente = {
            nome: data.get("nome") as string,
            sobreNome: data.get("sobreNome") as string,
            email: data.get("email") as string,
            telefones: [
                {
                    ddd: data.get("telefone")?.toString().substring(0, 2) as string,
                    numero: data.get("telefone")?.toString().substring(2) as string
                }
            ],
            endereco: {
                rua: data.get("rua") as string,
                numero: data.get("numero") as string,
                bairro: data.get("bairro") as string,
                cidade: data.get("cidade") as string,
                estado: data.get("estado") as string,
                codigoPostal: data.get("codigoPostal") as string,
                informacoesAdicionais: data.get("informacoesAdicionais") as string
            }
        };
        try {
            await fetch("http://localhost:32832/cliente/cadastrar", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cliente)
            });
            form.reset();
            success("Cliente cadastrado com sucesso!");
        } catch (error) {
            console.error("Error saving cliente:", error);
            erro("Erro ao cadastrar cliente.");
        }
    }

    return (
        <div>
            <h1>Cadastrar cliente</h1>
            <style>
                {`
                    form {
                        display: flex;
                        flex-direction: column;
                        gap: 10px;
                    }
                    label {
                        display: flex;
                        flex-direction: column;
                    }
                `}
            </style>
            <form onSubmit={handleSubmit} method="post">
                <label>Nome: <input type="text" name="nome" placeholder="João Gabriel"/></label>
                <label>Sobrenome: <input type="text" name="sobreNome" placeholder="Grossi Solis"/></label>
                <label>Email: <input type="text" name="email" placeholder="joao@gmail.com"/></label>
                <label>Telefone: <input type="text" name="telefone" placeholder="12123456789"/></label>
                <label>Estado: <input type="text" name="estado" placeholder="São Paulo"/></label>
                <label>Cidade: <input type="text" name="cidade" placeholder="Caçapava"/></label>
                <label>Bairro: <input type="text" name="bairro" placeholder="Residencial ..."/></label>
                <label>Rua: <input type="text" name="rua" placeholder="Rua ..."/></label>
                <label>Número: <input type="text" name="numero" placeholder="Numero"/></label>
                <label>Código postal: <input type="text" name="codigoPostal" placeholder="12285-405"/></label>
                <label>Informações adicionais: <input type="text" name="informacoesAdicionais" /></label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
}
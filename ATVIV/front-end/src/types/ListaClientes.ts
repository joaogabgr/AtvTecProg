export interface IListaClientes {
    id: number;
    nome: string;
    sobreNome: string;
    email: string | null;
    telefones: {
        id: number;
        ddd: string;
        numero: string;
        links: any[];
        [key: string]: any; // Add index signature
    }[];
    endereco: {
        estado: string;
        cidade: string;
        bairro: string;
        rua: string;
        numero: string;
    };
}
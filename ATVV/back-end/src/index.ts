import { AppDataSource } from "./data-source";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import cliente from "./routes/cliente";
import servico from "./routes/servico";
import compraCliente from "./routes/compraCliente";

const app = express();
const port = 5555;

AppDataSource.initialize().then(async () => {
    console.log('Conexão com o banco de dados estabelecida com sucesso');

    app.use(express.json());
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/clientes', cliente);
    app.use('/servicos', servico);
    app.use('/comprar', compraCliente);

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
    
}).catch((error) => {
    console.error('Erro ao conectar com o banco de dados', error);
});
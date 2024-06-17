import 'reflect-metadata';
import { DataSource } from "typeorm";
import { Clientes } from './entity/cliente';
import { Servicos } from './entity/servico';
import { Compra } from './entity/compraCliente';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Nc321654987",
    database: "atv",
    synchronize: true,
    logging: false,
    entities: [Clientes, Servicos, Compra],
    migrations: [],
    subscribers: []
});
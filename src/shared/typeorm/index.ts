import { Role } from "@roles/entities/roles";
import { User } from "src/users/entities/user";
import { DataSource } from "typeorm";
import { CreateRolesTable1677331850404 } from "./migrations/1677331850404-CreateRolesTable";
import { CreateUsersTable1681176074253 } from "./migrations/1681176074253-CreateUsersTable";
import { AddROlesIdToUsersTable1681319432703 } from "./migrations/1681319432703-AddROlesIdToUsersTable";
import { CreateProdutosTable1682273514932 } from "./migrations/1682273514932-CreateProdutosTable";
import { Produto } from "src/produtos/entities/produtos";
import { CreateClientes1682379409245 } from "./migrations/1682379409245-CreateClientes";
import { Cliente } from "src/clientes/entities/clientes";
import { ListaPedidos1682464634456 } from "./migrations/1682464634456-ListaPedidos";
import { ListaPedidos } from "src/listaPedidos/entities/listaPedidos";
import { FormaPagamento1683069045385 } from "./migrations/1683069045385-FormaPagamento";
import { FormaPagamento } from "src/formaPagamento/entities/formaPagamento";
export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role, User, Produto, Cliente, ListaPedidos, FormaPagamento],
    migrations: [
        CreateRolesTable1677331850404,
        CreateUsersTable1681176074253,
        AddROlesIdToUsersTable1681319432703,
        CreateProdutosTable1682273514932,
        CreateClientes1682379409245,
        ListaPedidos1682464634456,
        FormaPagamento1683069045385,
    ],
});

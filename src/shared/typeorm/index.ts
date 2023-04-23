import { Role } from "@roles/entities/roles";
import { User } from "src/users/entities/user";
import { DataSource } from "typeorm";
import { CreateRolesTable1677331850404 } from "./migrations/1677331850404-CreateRolesTable";
import { CreateUsersTable1681176074253 } from "./migrations/1681176074253-CreateUsersTable";
import { AddROlesIdToUsersTable1681319432703 } from "./migrations/1681319432703-AddROlesIdToUsersTable";
import { CreateProdutosTable1682273514932 } from "./migrations/1682273514932-CreateProdutosTable";
import { Produto } from "src/produtos/entities/produtos";
export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role, User, Produto],
    migrations: [
        CreateRolesTable1677331850404,
        CreateUsersTable1681176074253,
        AddROlesIdToUsersTable1681319432703,
        CreateProdutosTable1682273514932,
    ],
});

import { Role } from "@roles/entities/roles";
import { DataSource } from "typeorm";
import { CreateRolesTable1677331850404 } from "./migrations/1677331850404-CreateRolesTable";
import { CreateUsersTable1678446598161 } from "./migrations/1678446598161-CreateUsersTable";

export const dataSource = new DataSource({
    type: "sqlite",
    database: "./db.sqlite",
    entities: [Role],
    migrations: [CreateRolesTable1677331850404, CreateUsersTable1678446598161],
});

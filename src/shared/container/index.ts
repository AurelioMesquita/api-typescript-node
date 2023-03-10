import { IRolesRepository } from "@roles/repositories/iRolesRepository";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { container } from "tsyringe";

container.registerSingleton<IRolesRepository>(
    "RepositoryRoles",
    RepositoryRoles,
);

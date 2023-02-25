import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { CreateRoleController } from "./createRoleController";
import { CreateRoleUseCase } from "./createRoleUseCase";

const rolesRepository = RepositoryRoles.getInstance();
const createRoleUseCase = new CreateRoleUseCase(rolesRepository);
export const createRolesController = new CreateRoleController(
    createRoleUseCase,
);

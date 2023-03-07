import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { DeleteRoleController } from "./deleteRoleController";
import { DeleteRoleUseCase } from "./deleteRoleUseCase";

const rolesRepository = RepositoryRoles.getInstance();
const deleteRoleUseCase = new DeleteRoleUseCase(rolesRepository);
export const deleteRolesController = new DeleteRoleController(
    deleteRoleUseCase,
);

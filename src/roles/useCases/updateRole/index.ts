import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { UpdateRoleController } from "./updateRoleController";
import { UpdateRoleUseCase } from "./updateRoleUseCase";

const rolesRepository = RepositoryRoles.getInstance();
const updateRoleUseCase = new UpdateRoleUseCase(rolesRepository);
export const updateRolesController = new UpdateRoleController(
    updateRoleUseCase,
);

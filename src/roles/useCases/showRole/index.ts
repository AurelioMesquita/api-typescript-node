import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { ShowRoleController } from "./showRoleController";
import { ShowRoleUseCase } from "./showRoleUseCase";

const rolesRepository = RepositoryRoles.getInstance();
const showRoleUseCase = new ShowRoleUseCase(rolesRepository);
export const showRolesController = new ShowRoleController(showRoleUseCase);

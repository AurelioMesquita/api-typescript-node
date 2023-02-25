import { ListRolesController } from "./listRolesController";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { ListRolesUseCase } from "./listRolesUseCase";
const repositoryRoles = RepositoryRoles.getInstance();
const listRolesUseCase = new ListRolesUseCase(repositoryRoles);
export const listRolesController = new ListRolesController(listRolesUseCase);

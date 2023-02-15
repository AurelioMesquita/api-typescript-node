import { ListRolesController } from "./listRolesController";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { ListRolesUseCase } from "./listRolesUseCase";
const repositoryRoles = new RepositoryRoles();
const listRolesUseCase = new ListRolesUseCase(repositoryRoles);
export const listRolesController = new ListRolesController(listRolesUseCase);

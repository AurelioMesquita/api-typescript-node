import { IRolesRepository } from "@roles/repositories/iRolesRepository";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { CreateRoleController } from "@roles/useCases/createRole/createRoleController";
import { DeleteRoleController } from "@roles/useCases/deleteRole/deleteRoleController";
import { ListRolesController } from "@roles/useCases/listRoles/listRolesController";
import { ShowRoleController } from "@roles/useCases/showRole/showRoleController";
import { UpdateRoleController } from "@roles/useCases/updateRole/updateRoleController";
import { container } from "tsyringe";
container.registerSingleton<IRolesRepository>(
    "RepositoryRoles",
    RepositoryRoles,
);

container.registerSingleton("CreateRoleUseCase", CreateRoleController);
container.registerSingleton("DeleteRoleController", DeleteRoleController);
container.registerSingleton("ListRolesController", ListRolesController);
container.registerSingleton("ShowRoleController", ShowRoleController);
container.registerSingleton("UpdateRoleController", UpdateRoleController);

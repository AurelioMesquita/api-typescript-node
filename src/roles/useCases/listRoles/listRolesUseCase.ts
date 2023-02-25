import { Role } from "@roles/entities/roles";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";

export class ListRolesUseCase {
    constructor(private rolesRepository: RepositoryRoles) {}

    execute(): Role[] {
        return this.rolesRepository.findAll();
    }
}

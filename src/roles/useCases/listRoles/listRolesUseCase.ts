import { Role } from "@roles/entities/roles";
import {
    RepositoryRoles,
    RolesPaginateProperties,
} from "@roles/repositories/rolesRepository";

type listRolesUseCaseParams = {
    page: number;
    limit: number;
};
export class ListRolesUseCase {
    constructor(private rolesRepository: RepositoryRoles) { }

    execute({
        page,
        limit,
    }: listRolesUseCaseParams): Promise<RolesPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.rolesRepository.findAll({ page, skip, take });
    }
}

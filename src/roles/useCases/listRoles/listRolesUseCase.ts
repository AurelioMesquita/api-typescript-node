import {
    IRolesRepository,
    RolesPaginateProperties,
} from "@roles/repositories/iRolesRepository";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { inject, injectable } from "tsyringe";

type listRolesUseCaseParams = {
    page: number;
    limit: number;
};
@injectable()
export class ListRolesUseCase {
    constructor(
        @inject("RepositoryRoles") private rolesRepository: IRolesRepository,
    ) { }

    execute({
        page,
        limit,
    }: listRolesUseCaseParams): Promise<RolesPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.rolesRepository.findAll({ page, skip, take });
    }
}

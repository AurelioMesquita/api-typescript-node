import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IRolesRepository } from "@roles/repositories/iRolesRepository";

type ShowRoleParams = {
    id: string;
};
@injectable()
export class ShowRoleUseCase {
    constructor(
        @inject("RepositoryRoles") private rolesRepository: IRolesRepository,
    ) { }
    async execute({ id }: ShowRoleParams): Promise<Role> {
        const role = await this.rolesRepository.findById(id);
        if (!role) throw new AppError("Role not found", 404);
        return role;
    }
}

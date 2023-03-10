import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IRolesRepository } from "@roles/repositories/iRolesRepository";

type DeleteRoleParams = {
    id: string;
};
@injectable()
export class DeleteRoleUseCase {
    constructor(
        @inject("RepositoryRoles") private rolesRepository: IRolesRepository,
    ) { }
    async execute({ id }: DeleteRoleParams): Promise<void> {
        const role = await this.rolesRepository.findById(id);
        if (!role) throw new AppError("Role not found", 404);
        await this.rolesRepository.delete(role);
    }
}

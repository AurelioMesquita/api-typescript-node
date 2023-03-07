import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";

type DeleteRoleParams = {
    id: string;
};

export class DeleteRoleUseCase {
    constructor(private rolesRepository: RepositoryRoles) { }
    async execute({ id }: DeleteRoleParams): Promise<void> {
        const role = await this.rolesRepository.findById(id);
        if (!role) throw new AppError("Role not found", 404);
        await this.rolesRepository.delete(role);
    }
}

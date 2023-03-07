import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";

type CreateRoleDTO = {
    name: string;
};

export class CreateRoleUseCase {
    constructor(private rolesRepository: RepositoryRoles) { }
    async execute({ name }: CreateRoleDTO): Promise<Role> {
        const roleAlreadyExists = await this.rolesRepository.findByName(name);
        if (roleAlreadyExists) throw new AppError("Role Already exists");
        return this.rolesRepository.create({ name });
    }
}

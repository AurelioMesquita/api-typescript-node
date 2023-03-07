import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";

type UpdateRoleDTO = {
    id: string;
    name: string;
};

export class UpdateRoleUseCase {
    constructor(private rolesRepository: RepositoryRoles) { }
    async execute({ id, name }: UpdateRoleDTO): Promise<Role> {
        const role = await this.rolesRepository.findById(id);
        if (!role) throw new AppError("Role not found", 404);
        const nameExist = await this.rolesRepository.findByName(name);
        if (nameExist && role.name !== nameExist.name)
            throw new AppError("Name Already exists");
        role.name = name;
        return this.rolesRepository.save(role);
    }
}

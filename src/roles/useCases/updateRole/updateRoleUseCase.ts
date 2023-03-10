import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IRolesRepository } from "@roles/repositories/iRolesRepository";

type UpdateRoleDTO = {
    id: string;
    name: string;
};

@injectable()
export class UpdateRoleUseCase {
    constructor(
        @inject("RepositoryRoles") private rolesRepository: IRolesRepository,
    ) { }
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

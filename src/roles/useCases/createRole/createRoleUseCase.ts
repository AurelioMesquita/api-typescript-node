import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { injectable, inject } from "tsyringe";
import { IRolesRepository } from "@roles/repositories/iRolesRepository";

type CreateRoleDTO = {
    name: string;
};
@injectable()
export class CreateRoleUseCase {
    constructor(
        @inject("RepositoryRoles") private rolesRepository: IRolesRepository,
    ) { }
    async execute({ name }: CreateRoleDTO): Promise<Role> {
        const roleAlreadyExists = await this.rolesRepository.findByName(name);
        if (roleAlreadyExists) throw new AppError("Role Already exists");
        return this.rolesRepository.create({ name });
    }
}

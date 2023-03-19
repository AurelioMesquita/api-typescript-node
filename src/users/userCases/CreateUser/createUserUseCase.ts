import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "src/users/repositories/IUsersRepository";
import { IRolesRepository } from "@roles/repositories/iRolesRepository";
import { User } from "src/users/entities/user";
import { AppError } from "@shared/errors/AppError";
import { hash } from "bcryptjs";

export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    roleId: string;
};

@injectable()
export class CreateUserCase {
    constructor(
        @inject("UsersRepository") private UsersRepository: IUsersRepository,
        @inject("RepositoryRoles") private rolesRepository: IRolesRepository,
    ) { }
    async execute({
        name,
        email,
        password,
        isAdmin,
        roleId,
    }: CreateUserDTO): Promise<User> {
        const emailExists = await this.UsersRepository.findByEmail(email);

        if (emailExists) throw new AppError("Email already exists");

        const role = await this.rolesRepository.findById(roleId);

        if (role) throw new AppError("Role not found ", 404);

        const hashedPassword = await hash(password, 10);

        const user = await this.UsersRepository.create({
            name,
            email,
            password: hashedPassword,
            isAdmin,
            role,
        });
        return user;
    }
}

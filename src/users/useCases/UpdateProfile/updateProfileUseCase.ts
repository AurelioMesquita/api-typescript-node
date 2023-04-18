import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "src/users/repositories/IUsersRepository";
import { User } from "src/users/entities/user";
import { AppError } from "@shared/errors/AppError";
import { compare, hash } from "bcryptjs";

export type UpdateprofileDTO = {
    userId: string;
    name: string;
    email: string;
    password?: string;
    old_password?: string;
};

@injectable()
export class UpdateProfileUseCase {
    constructor(
        @inject("UsersRepository") private UsersRepository: IUsersRepository,
    ) { }
    async execute({
        userId,
        name,
        email,
        password,
        old_password,
    }: UpdateprofileDTO): Promise<User> {
        const user = await this.UsersRepository.findById(userId);

        if (!user) throw new AppError("User not found.", 404);

        const userUpdateEmail = await this.UsersRepository.findByEmail(email);

        if (userUpdateEmail && (await userUpdateEmail).id !== userId)
            throw new AppError("There is already one user with this email");

        if (password && old_password) {
            const checkOldPassword = await compare(old_password, user.password);
            if (!checkOldPassword) {
                throw new AppError("Old password does not match");
            }
            user.password = await hash(password, 10);
        }
        user.name = name;
        user.email = email;
        return this.UsersRepository.save(user);
    }
}

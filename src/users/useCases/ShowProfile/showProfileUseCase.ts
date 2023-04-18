import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "src/users/repositories/IUsersRepository";
import { User } from "src/users/entities/user";
import { AppError } from "@shared/errors/AppError";

type ShowProfileParams = {
    userId: string;
};

@injectable()
export class ShowProfileUseCase {
    constructor(
        @inject("UsersRepository") private UsersRepository: IUsersRepository,
    ) { }
    async execute({ userId }: ShowProfileParams): Promise<User> {
        const user = await this.UsersRepository.findById(userId);

        if (!user) throw new AppError("User not found", 404);

        return user;
    }
}

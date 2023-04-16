import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "src/users/repositories/IUsersRepository";
import { User } from "src/users/entities/user";
import { AppError } from "@shared/errors/AppError";
import path from "path";
import uploadConfig from "@config/upload";
import { fs } from "fs";
export type UpdateAvatarDTO = {
    userId: string;
    avatarFileName: string;
};

@injectable()
export class UpdateAvatarUseCase {
    constructor(
        @inject("UsersRepository") private UsersRepository: IUsersRepository,
    ) { }
    async execute({ userId, avatarFileName }: UpdateAvatarDTO): Promise<User> {
        const user = await this.UsersRepository.findById(userId);

        if (!user)
            throw new AppError(
                "Only authenticated users can change avatar.",
                401,
            );
        if (user.avatar) {
            const userAvatarFilePath = path.join(
                uploadConfig.directory,
                user.avatar,
            );
            const userAvatarFileExists = await fs.promise.stat(
                userAvatarFilePath,
            );
            if (userAvatarFileExists)
                await fs.promise.unlink(userAvatarFilePath);
        }
        user.avatar = avatarFileName;
        return await this.UsersRepository.save(user);
    }
}

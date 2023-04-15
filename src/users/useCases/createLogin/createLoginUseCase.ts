import { inject, injectable } from "tsyringe";
import { AppError } from "@shared/errors/AppError";
import { User } from "src/users/entities/user";
import { IUsersRepository } from "src/users/repositories/IUsersRepository";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import jwtConfig from "@config/auth";
export type CreateLoginDTO = {
    email: string;
    password: string;
};
type IResponse = {
    user: User;
    token: string;
};

@injectable()
export class CreateLoginUseCase {
    constructor(
        @inject("UsersRepository") private UsersRepository: IUsersRepository,
    ) { }
    async execute({ email, password }: CreateLoginDTO): Promise<IResponse> {
        const user = await this.UsersRepository.findByEmail(email);

        if (!user)
            throw new AppError("Incorrect email/password combination", 401);

        const passwordConfirmed = await compare(password, user.password);
        if (!passwordConfirmed)
            throw new AppError("Incorrect email/password combination", 401);

        const token = sign({}, jwtConfig.jwt.secret, {
            subject: user.id,
            expiresIn: jwtConfig.jwt.expiresIn,
        });
        return { user, token };
    }
}

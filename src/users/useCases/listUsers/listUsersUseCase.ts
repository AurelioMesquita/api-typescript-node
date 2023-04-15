import {
    IUsersRepository,
    UsersPaginateProperties,
} from "src/users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

type listUsersUseCaseParams = {
    page: number;
    limit: number;
};
@injectable()
export class ListUserUseCase {
    constructor(
        @inject("UsersRepository") private usersRepository: IUsersRepository,
    ) { }

    execute({
        page,
        limit,
    }: listUsersUseCaseParams): Promise<UsersPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.usersRepository.findAll({ page, skip, take });
    }
}

import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/usersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);

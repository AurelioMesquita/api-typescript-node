import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/usersRepository";
import { CreateUserController } from "../userCases/CreateUser/createUserControler";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);
container.registerSingleton("CreateUserController", CreateUserController);

import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/usersRepository";
import { CreateUserController } from "../userCases/CreateUser/createUserControler";
import { ListUsersController } from "../userCases/listUsers/listUsersController";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);
container.registerSingleton("CreateUserController", CreateUserController);
container.registerSingleton("ListUsersController", ListUsersController);

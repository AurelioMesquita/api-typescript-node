import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/usersRepository";
import { CreateUserController } from "../useCases/CreateUser/createUserControler";
import { ListUsersController } from "../useCases/listUsers/listUsersController";
import { CreateLoginController } from "../useCases/createLogin/createLoginController";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);
container.registerSingleton("CreateUserController", CreateUserController);
container.registerSingleton("ListUsersController", ListUsersController);
container.registerSingleton("CreateLoginController", CreateLoginController);

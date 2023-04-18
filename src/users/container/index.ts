import { container } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { UsersRepository } from "../repositories/usersRepository";
import { CreateUserController } from "../useCases/CreateUser/createUserControler";
import { ListUsersController } from "../useCases/listUsers/listUsersController";
import { CreateLoginController } from "../useCases/createLogin/createLoginController";
import { UpdateAvatarController } from "../useCases/updateAvatar/updateAvatarController";
import { ShowProfileController } from "../useCases/ShowProfile/showProfileController";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository,
);
container.registerSingleton("CreateUserController", CreateUserController);
container.registerSingleton("ListUsersController", ListUsersController);
container.registerSingleton("CreateLoginController", CreateLoginController);
container.registerSingleton("UpdateAvatarController", UpdateAvatarController);
container.registerSingleton("ShowProfileController", ShowProfileController);

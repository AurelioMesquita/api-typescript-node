import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { CreateUserController } from "../useCases/CreateUser/createUserControler";
import { ListUsersController } from "../useCases/listUsers/listUsersController";
import { CreateLoginController } from "../useCases/createLogin/createLoginController";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
import multer from "multer";
import uploadConfig from "@config/upload";
import { UpdateAvatarController } from "../useCases/updateAvatar/updateAvatarController";

const usersRouter = Router();
usersRouter.use(isAuthenticated);

const createUserController = container.resolve(CreateUserController);
const listUsersController = container.resolve(ListUsersController);
const createLoginController = container.resolve(CreateLoginController);
const updateAvatarController = container.resolve(UpdateAvatarController);
const upload = multer(uploadConfig);

usersRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            isAdmin: Joi.boolean().required(),
            roleId: Joi.string().uuid().required(),
        },
    }),
    (request, response) => {
        return createUserController.handle(request, response);
    },
);
usersRouter.post(
    "/login",
    celebrate({
        [Segments.BODY]: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        },
    }),
    (request, response) => {
        return createLoginController.handle(request, response);
    },
);
usersRouter.get(
    "/",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    }),
    (request, response) => {
        return listUsersController.handle(request, response);
    },
);
usersRouter.patch(
    "/avatar",
    isAuthenticated,
    upload.single("avatar"),
    (request, response) => {
        return updateAvatarController.handle(request, response);
    },
);
export { usersRouter };

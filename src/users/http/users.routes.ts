import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { container } from "tsyringe";
import { CreateUserController } from "../userCases/CreateUser/createUserControler";
import { ListUsersController } from "../userCases/listUsers/listUsersController";

const usersRouter = Router();
const createUserController = container.resolve(CreateUserController);
const listUsersController = container.resolve(ListUsersController);

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
export { usersRouter };

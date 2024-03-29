import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import { CreateRoleController } from "@roles/useCases/createRole/createRoleController";
import { container } from "tsyringe";
import { ListRolesController } from "@roles/useCases/listRoles/listRolesController";
import { ShowRoleController } from "@roles/useCases/showRole/showRoleController";
import { UpdateRoleController } from "@roles/useCases/updateRole/updateRoleController";
import { DeleteRoleController } from "@roles/useCases/deleteRole/deleteRoleController";
import { isAuthenticated } from "@shared/http/middlewares/isAuthenticated";
const rolesRouter = Router();
const createRoleController = container.resolve(CreateRoleController);
const listRolesController = container.resolve(ListRolesController);
const showRoleController = container.resolve(ShowRoleController);
const updateRoleController = container.resolve(UpdateRoleController);
const deleteRoleController = container.resolve(DeleteRoleController);
rolesRouter.use(isAuthenticated);
rolesRouter.post(
    "/",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),
    (request, response) => {
        return createRoleController.handle(request, response);
    },
);

rolesRouter.get(
    "/",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
            limit: Joi.number(),
        }),
    }),
    (request, response) => {
        return listRolesController.handle(request, response);
    },
);

rolesRouter.get(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return showRoleController.handle(request, response);
    },
);
rolesRouter.put(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
        }),
    }),
    (request, response) => {
        return updateRoleController.handle(request, response);
    },
);
rolesRouter.delete(
    "/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().uuid().required(),
        }),
    }),
    (request, response) => {
        return deleteRoleController.handle(request, response);
    },
);

export { rolesRouter };

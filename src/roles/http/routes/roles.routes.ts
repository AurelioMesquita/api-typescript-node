import { CreateRoleController } from "@roles/useCases/createRole/createRoleController";
import { Router } from "express";

const rolesRouter = Router();
const createRolesController = new CreateRoleController();

rolesRouter.post("/", (request, response) => {
    return createRolesController.handle(request, response);
});

rolesRouter.get("/", (res, response) => {
    // const roles = rolesRepository.findAll();
    // return response.json(roles);
});

export { rolesRouter };

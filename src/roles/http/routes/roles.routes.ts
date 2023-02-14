import { createRolesController } from "@roles/useCases/createRole";
import { Router } from "express";

const rolesRouter = Router();

rolesRouter.post("/", (request, response) => {
    return createRolesController.handle(request, response);
});

rolesRouter.get("/", (res, response) => {
    // const roles = rolesRepository.findAll();
    // return response.json(roles);
});

export { rolesRouter };

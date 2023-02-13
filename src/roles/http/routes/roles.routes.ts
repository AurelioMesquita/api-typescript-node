import { Role } from "./entities/roles";
import { Router } from "express";

const rolesRouter = Router();

const roles: Role[] = [];

rolesRouter.post("/", (res, response) => {
    const { name } = res.body;

    const role = new Role();
    Object.assign(role, {
        name: name,
        created_at: new Date(),
    });

    roles.push(role);

    return response.status(201).json(role);
});

export { rolesRouter };

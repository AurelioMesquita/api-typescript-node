import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const rolesRouter = Router();

const roles = [];

rolesRouter.post("/", (res, response) => {
    const { name } = res.body;
    const role = {
        name: name,
        id: uuidv4(),
        created_at: new Date(),
    };

    roles.push(role);

    return response.status(201).json(role);
});

export { rolesRouter };

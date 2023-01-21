import { Router } from "express";
import { v4 as uuidv4 } from "uuid";

const rolesRouter = Router();

const roles = [];

rolesRouter.post("/", (request, response) => {
    const oi = request.body;
    console.log(oi);
    const role = {
        id: uuidv4(),
        // name,
        created_at: new Date(),
    };

    roles.push(role);

    return response.status(201).json(role);
});

export { rolesRouter };

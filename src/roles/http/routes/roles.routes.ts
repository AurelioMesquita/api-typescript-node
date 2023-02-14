import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { Router } from "express";

const rolesRouter = Router();
const rolesRepository = new RepositoryRoles();

rolesRouter.post("/", (res, response) => {
    const { name } = res.body;
    const roleAlreadyExists = rolesRepository.findByName(name);
    if (roleAlreadyExists)
        return response.status(400).json({ error: "Role Already exists" });
    const role = rolesRepository.create({ name });

    return response.status(201).json(role);
});

rolesRouter.get("/", (res, response) => {
    const roles = rolesRepository.findAll();

    return response.json(roles);
});

export { rolesRouter };

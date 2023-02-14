import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";

export class CreateRoleController {
    handle(request: Request, response: Response): Response {
        const { name } = request.body;
        const rolesRepository = new RepositoryRoles();
        const roleAlreadyExists = rolesRepository.findByName(name);
        if (roleAlreadyExists) throw new AppError("Role Already exists");
        const role = rolesRepository.create({ name });

        return response.status(201).json(role);
    }
}

import { CreateRoleUseCase } from "./createRoleUseCase";
import { RepositoryRoles } from "@roles/repositories/rolesRepository";
import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";

export class CreateRoleController {
    constructor(private createRoleUseCase: CreateRoleUseCase) { }
    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;
        const role = await this.createRoleUseCase.execute({ name });

        return response.status(201).json(role);
    }
}

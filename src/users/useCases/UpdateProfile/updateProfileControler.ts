import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./updateProfileUseCase";
import { instanceToInstance } from "class-transformer";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createUserCase = container.resolve(CreateUserUseCase);
        const { name, email, password, isAdmin, roleId } = request.body;
        const user = await createUserCase.execute({
            name,
            email,
            password,
            isAdmin,
            roleId,
        });
        return response.status(201).json(instanceToInstance(user));
    }
}

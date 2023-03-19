import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserCase } from "./createUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createUserCase = container.resolve(CreateUserCase);
        const { name, email, password, isAdmin, roleId } = request.body;
        const user = await createUserCase.execute({
            name,
            email,
            password,
            isAdmin,
            roleId,
        });
        return response.status(201).json(user);
    }
}

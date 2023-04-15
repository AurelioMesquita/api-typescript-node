import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLoginUseCase } from "./createLoginUseCase";
import { instanceToInstance } from "class-transformer";

export class CreateLoginController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createLoginCase = container.resolve(CreateLoginUseCase);
        const { email, password } = request.body;
        const { user, token } = await createLoginCase.execute({
            email,
            password,
        });
        return response.status(201).json(instanceToInstance({ user, token }));
    }
}

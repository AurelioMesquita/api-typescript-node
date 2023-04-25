import { Request, Response } from "express";
import { ShowClienteUseCase } from "./showClienteUseCase";
import { container } from "tsyringe";

export class ShowClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showClienteUseCase = container.resolve(ShowClienteUseCase);
        const { id } = request.params;
        const cliente = await showClienteUseCase.execute({ id });

        return response.status(201).json(cliente);
    }
}

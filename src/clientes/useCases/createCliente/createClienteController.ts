import { CreateClienteUseCase } from "./createClienteUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
export class CreateClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createClienteUseCase = container.resolve(CreateClienteUseCase);
        const { name } = request.body;
        const { endereco } = request.body;
        const { numero } = request.body;
        const { telefone } = request.body;
        const { cidade } = request.body;
        const { montante_total } = request.body;
        const cliente = await createClienteUseCase.execute({
            name,
            endereco,
            numero,
            telefone,
            cidade,
            montante_total,
        });

        return response.status(201).json(cliente);
    }
}

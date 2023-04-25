import { Request, Response } from "express";
import { UpdateClientesUseCase } from "./updateClienteUseCase";
import { container } from "tsyringe";

export class UpdateClientesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateClienteUseCase = container.resolve(UpdateClientesUseCase);
        const { id } = request.params;
        const { name } = request.body;
        const { endereco } = request.body;
        const { numero } = request.body;
        const { telefone } = request.body;
        const { cidade } = request.body;
        const { montante_total } = request.body;
        const cliente = await updateClienteUseCase.execute({
            id,
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

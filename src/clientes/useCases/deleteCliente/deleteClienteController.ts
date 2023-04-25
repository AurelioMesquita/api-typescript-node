import { Request, Response } from "express";
import { DeleteClienteUseCase } from "./deleteClienteUseCase";
import { container } from "tsyringe";

export class DeleteClienteController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteClienteUseCase = container.resolve(DeleteClienteUseCase);
        const { id } = request.params;
        await deleteClienteUseCase.execute({ id });

        return response.status(204).send();
    }
}

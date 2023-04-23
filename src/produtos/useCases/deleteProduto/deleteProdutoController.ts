import { Request, Response } from "express";
import { DeleteProdutoUseCase } from "./deleteProdutoUseCase";
import { container } from "tsyringe";

export class DeleteProdutoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteProdutoUseCase = container.resolve(DeleteProdutoUseCase);
        const { id } = request.params;
        await deleteProdutoUseCase.execute({ id });

        return response.status(204).send();
    }
}

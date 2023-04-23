import { CreateProdutoUseCase } from "./createProdutoUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
export class CreateProdutoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createProdutoUseCase = container.resolve(CreateProdutoUseCase);
        const { name } = request.body;
        const produto = await createProdutoUseCase.execute({ name });

        return response.status(201).json(produto);
    }
}

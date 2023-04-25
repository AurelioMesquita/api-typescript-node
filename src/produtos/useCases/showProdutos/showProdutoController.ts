import { Request, Response } from "express";
import { ShowProdutoUseCase } from "./showProdutoUseCase";
import { container } from "tsyringe";

export class ShowProdutoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showProdutoUseCase = container.resolve(ShowProdutoUseCase);
        const { id } = request.params;
        const produto = await showProdutoUseCase.execute({ id });

        return response.status(201).json(produto);
    }
}

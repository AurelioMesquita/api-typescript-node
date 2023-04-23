import { CreateProdutoUseCase } from "./createProdutoUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
export class CreateProdutoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createProdutoUseCase = container.resolve(CreateProdutoUseCase);
        const { name } = request.body;
        const { sn_estoque } = request.body;
        const { sn_catalogo } = request.body;
        const { valor } = request.body;
        const { pagina_catalogo } = request.body;
        const produto = await createProdutoUseCase.execute({
            name,
            sn_catalogo,
            sn_estoque,
            valor,
            pagina_catalogo,
        });

        return response.status(201).json(produto);
    }
}

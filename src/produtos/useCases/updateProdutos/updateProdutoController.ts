import { Request, Response } from "express";
import { UpdateProdutoUseCase } from "./updateProdutoUseCase";
import { container } from "tsyringe";

export class UpdateProdutoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateProdutoUseCase = container.resolve(UpdateProdutoUseCase);
        const { id } = request.params;
        const { name } = request.body;
        const { sn_estoque } = request.body;
        const { valor } = request.body;
        const { sn_catalogo } = request.body;
        const { pagina_catalogo } = request.body;
        const role = await updateProdutoUseCase.execute({
            id,
            name,
            sn_estoque,
            valor,
            sn_catalogo,
            pagina_catalogo,
        });

        return response.status(201).json(role);
    }
}

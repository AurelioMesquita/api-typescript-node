import { Request, Response } from "express";
import { ListProdutosUseCase } from "./listProdutosUseCase";
import { container } from "tsyringe";

export class ListProdutosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listProdutosUseCase = container.resolve(ListProdutosUseCase);
        const page =
            request.query.page && Number(request.query.page) > 0
                ? Number(request.query.page)
                : 1;
        const limit =
            request.query.limit && Number(request.query.limit) > 0
                ? Number(request.query.limit)
                : 15;
        const produtos = await listProdutosUseCase.execute({ page, limit });
        return response.json(produtos);
    }
}

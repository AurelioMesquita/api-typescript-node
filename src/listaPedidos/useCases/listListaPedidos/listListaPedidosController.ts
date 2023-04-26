import { Request, Response } from "express";
import { ListListaPedidosUseCase } from "./listListaPedidosUseCase";
import { container } from "tsyringe";

export class ListListaPedidosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listListaPedidosUseCase = container.resolve(
            ListListaPedidosUseCase,
        );
        const page =
            request.query.page && Number(request.query.page) > 0
                ? Number(request.query.page)
                : 1;
        const limit =
            request.query.limit && Number(request.query.limit) > 0
                ? Number(request.query.limit)
                : 15;
        const listaPedidos = await listListaPedidosUseCase.execute({
            page,
            limit,
        });
        return response.json(listaPedidos);
    }
}

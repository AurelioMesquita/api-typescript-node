import { Request, Response } from "express";
import { UpdateListaPedidosUseCase } from "./updateListaPedidosUseCase";
import { container } from "tsyringe";

export class UpdateListaPedidosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateListaPedidosUseCase = container.resolve(
            UpdateListaPedidosUseCase,
        );
        const { id } = request.params;
        const { produto } = request.body;
        const { quantidade } = request.body;
        const { sn_catalogo } = request.body;
        const { pagina_catalogo } = request.body;
        const ListaPedido = await updateListaPedidosUseCase.execute({
            id,
            produto,
            quantidade,
            sn_catalogo,
            pagina_catalogo,
        });

        return response.status(201).json(ListaPedido);
    }
}

import { CreateListaPedidosUseCase } from "./createListaPedidosUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
export class CreateListaPedidosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createListaUseCase = container.resolve(CreateListaPedidosUseCase);
        const { produto } = request.body;
        const { quantidade } = request.body;
        const { sn_catalogo } = request.body;
        const { pagina_catalogo } = request.body;
        const listaPedidos = await createListaUseCase.execute({
            produto,
            quantidade,
            sn_catalogo,
            pagina_catalogo,
        });

        return response.status(201).json(listaPedidos);
    }
}

import { Request, Response } from "express";
import { ListaPedidosUseCase } from "./deleteListaPedidosUseCase";
import { container } from "tsyringe";

export class DeleteListaPedidosController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteListaPedidosUseCase =
            container.resolve(ListaPedidosUseCase);
        const { id } = request.params;
        await deleteListaPedidosUseCase.execute({ id });

        return response.status(204).send();
    }
}

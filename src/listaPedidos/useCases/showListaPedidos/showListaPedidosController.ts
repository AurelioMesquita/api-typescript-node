import { Request, Response } from "express";
import { ShowListaPedidosUseCase } from "./showListaPedidosUseCase";
import { container } from "tsyringe";

export class ShowListaPedidoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showListaPedidosUseCase = container.resolve(
            ShowListaPedidosUseCase,
        );
        const { id } = request.params;
        const listaPedidos = await showListaPedidosUseCase.execute({ id });

        return response.status(201).json(listaPedidos);
    }
}

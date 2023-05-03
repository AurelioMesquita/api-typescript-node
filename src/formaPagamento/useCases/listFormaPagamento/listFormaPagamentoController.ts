import { Request, Response } from "express";
import { ListFormaPagamentosUseCase } from "./listFormaPagamentoUseCase";
import { container } from "tsyringe";

export class ListFormaPagamentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listFormaPagamentoUseCase = container.resolve(
            ListFormaPagamentosUseCase,
        );
        const page =
            request.query.page && Number(request.query.page) > 0
                ? Number(request.query.page)
                : 1;
        const limit =
            request.query.limit && Number(request.query.limit) > 0
                ? Number(request.query.limit)
                : 15;
        const formaPagamento = await listFormaPagamentoUseCase.execute({
            page,
            limit,
        });
        return response.json(formaPagamento);
    }
}

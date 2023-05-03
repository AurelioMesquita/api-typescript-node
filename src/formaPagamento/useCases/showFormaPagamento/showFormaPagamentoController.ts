import { Request, Response } from "express";
import { ShowFormaPagamentoUseCase } from "./showFormaPagamentoUseCase";
import { container } from "tsyringe";

export class ShowFormaPagamentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const showFormaPagamentoUseCase = container.resolve(
            ShowFormaPagamentoUseCase,
        );
        const { id } = request.params;
        const formaPagamento = await showFormaPagamentoUseCase.execute({ id });

        return response.status(201).json(formaPagamento);
    }
}

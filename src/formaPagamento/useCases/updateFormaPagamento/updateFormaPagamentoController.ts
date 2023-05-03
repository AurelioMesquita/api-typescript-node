import { Request, Response } from "express";
import { UpdateFormaPagamentosUseCase } from "./updateFormaPagamentoUseCase";
import { container } from "tsyringe";

export class UpdateFormaPagamentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const updateFormaPagamentoUseCase = container.resolve(
            UpdateFormaPagamentosUseCase,
        );
        const { id } = request.params;
        const { formaPagamento } = request.body;
        const { quantidadeVezes } = request.body;
        const { dtInicioPagamento } = request.body;
        const FormaPagamento = await updateFormaPagamentoUseCase.execute({
            id,
            formaPagamento,
            quantidadeVezes,
            dtInicioPagamento,
        });

        return response.status(201).json(FormaPagamento);
    }
}

import { CreateFormaPagamentoUseCase } from "./createFormaPagamentoUseCase";
import { Request, Response } from "express";
import { container } from "tsyringe";
export class CreateFormaPagamentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createFormaPagamentoUseCase = container.resolve(
            CreateFormaPagamentoUseCase,
        );
        const { formaPagamento } = request.body;
        const { quantidadeVezes } = request.body;
        const { dtInicioPagamento } = request.body;
        const FormaPagamento = await createFormaPagamentoUseCase.execute({
            formaPagamento,
            quantidadeVezes,
            dtInicioPagamento,
        });

        return response.status(201).json(FormaPagamento);
    }
}

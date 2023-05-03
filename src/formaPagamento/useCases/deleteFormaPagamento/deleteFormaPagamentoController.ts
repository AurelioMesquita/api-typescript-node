import { Request, Response } from "express";
import { DeleteFormaPagamentoUseCase } from "./deleteFormaPagamentoUseCase";
import { container } from "tsyringe";

export class DeleteFormaPagamentoController {
    async handle(request: Request, response: Response): Promise<Response> {
        const deleteFormaPagamentoUseCase = container.resolve(
            DeleteFormaPagamentoUseCase,
        );
        const { id } = request.params;
        await deleteFormaPagamentoUseCase.execute({ id });

        return response.status(204).send();
    }
}

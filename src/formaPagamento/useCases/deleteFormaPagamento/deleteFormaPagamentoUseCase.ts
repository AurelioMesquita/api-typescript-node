import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IFormaPagamentoRepository } from "src/formaPagamento/repositories/iFormaPagamentoRepository";
type DeleteFormaPagamentoParams = {
    id: string;
};
@injectable()
export class DeleteFormaPagamentoUseCase {
    constructor(
        @inject("RepositoryFormaPagamento")
        private FormaPagamentoRepository: IFormaPagamentoRepository,
    ) { }
    async execute({ id }: DeleteFormaPagamentoParams): Promise<void> {
        const FormaPagamento = await this.FormaPagamentoRepository.findById(id);
        if (!FormaPagamento)
            throw new AppError("forma Pagamento not found", 404);
        await this.FormaPagamentoRepository.delete(FormaPagamento);
    }
}

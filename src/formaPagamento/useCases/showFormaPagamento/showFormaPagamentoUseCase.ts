import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IFormaPagamentoRepository } from "src/formaPagamento/repositories/iFormaPagamentoRepository";
import { FormaPagamento } from "src/formaPagamento/entities/formaPagamento";
type ShowFormaPagamentosParams = {
    id: string;
};
@injectable()
export class ShowFormaPagamentoUseCase {
    constructor(
        @inject("RepositoryFormaPagamento")
        private FormaPagamentosRepository: IFormaPagamentoRepository,
    ) { }
    async execute({ id }: ShowFormaPagamentosParams): Promise<FormaPagamento> {
        const FormaPagamento = await this.FormaPagamentosRepository.findById(
            id,
        );
        if (!FormaPagamento)
            throw new AppError("Forma Pagamento not found", 404);
        return FormaPagamento;
    }
}

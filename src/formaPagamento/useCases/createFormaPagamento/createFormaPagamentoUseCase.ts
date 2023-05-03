import { AppError } from "@shared/errors/AppError";
import { injectable, inject } from "tsyringe";
import { FormaPagamento } from "src/formaPagamento/entities/formaPagamento";
import { IFormaPagamentoRepository } from "src/formaPagamento/repositories/iFormaPagamentoRepository";

type CreateFormaPagamentoDTO = {
    formaPagamento: string;
    quantidadeVezes: number;
    dtInicioPagamento: Date;
};
@injectable()
export class CreateFormaPagamentoUseCase {
    constructor(
        @inject("RepositoryFormaPagamento")
        private formaPagamentoRepository: IFormaPagamentoRepository,
    ) { }
    async execute({
        formaPagamento,
        quantidadeVezes,
        dtInicioPagamento,
    }: CreateFormaPagamentoDTO): Promise<FormaPagamento> {
        const formaPagamentolreadyExists =
            await this.formaPagamentoRepository.findByName(formaPagamento);
        if (formaPagamentolreadyExists)
            throw new AppError("Forma Pagamento Already exists");
        return this.formaPagamentoRepository.create({
            formaPagamento,
            quantidadeVezes,
            dtInicioPagamento,
        });
    }
}

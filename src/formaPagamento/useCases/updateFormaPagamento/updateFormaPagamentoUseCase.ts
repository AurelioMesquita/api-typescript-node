import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IFormaPagamentoRepository } from "src/formaPagamento/repositories/iFormaPagamentoRepository";
import { FormaPagamento } from "src/formaPagamento/entities/formaPagamento";

type UpdateFormaPagamentoTO = {
    id: string;
    formaPagamento: string;
    quantidadeVezes: number;
    dtInicioPagamento: Date;
};

@injectable()
export class UpdateFormaPagamentosUseCase {
    constructor(
        @inject("RepositoryFormaPagamento")
        private FormaPagamentosRepository: IFormaPagamentoRepository,
    ) { }
    async execute({
        id,
        formaPagamento,
        quantidadeVezes,
        dtInicioPagamento,
    }: UpdateFormaPagamentoTO): Promise<FormaPagamento> {
        const FormaPagamento = await this.FormaPagamentosRepository.findById(
            id,
        );
        if (!FormaPagamento)
            throw new AppError("Forma Pagamento not found", 404);
        const nameExist = await this.FormaPagamentosRepository.findByName(
            formaPagamento,
        );
        if (
            nameExist &&
            FormaPagamento.formaPagamento !== nameExist.formaPagamento
        )
            throw new AppError("Forma Pagamento Already exists");

        FormaPagamento.formaPagamento = formaPagamento;
        FormaPagamento.quantidadeVezes = quantidadeVezes;
        FormaPagamento.dtInicioPagamento = dtInicioPagamento;
        return this.FormaPagamentosRepository.save(FormaPagamento);
    }
}

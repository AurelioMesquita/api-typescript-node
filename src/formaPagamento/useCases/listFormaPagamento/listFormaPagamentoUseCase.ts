import { FormaPagamentoPaginateProperties } from "src/formaPagamento/repositories/iFormaPagamentoRepository";
import { IFormaPagamentoRepository } from "src/formaPagamento/repositories/iFormaPagamentoRepository";
import { inject, injectable } from "tsyringe";

type listFormaPagamentoUseCaseParams = {
    page: number;
    limit: number;
};
@injectable()
export class ListFormaPagamentosUseCase {
    constructor(
        @inject("RepositoryFormaPagamento")
        private FormaPagamentosRepository: IFormaPagamentoRepository,
    ) { }

    execute({
        page,
        limit,
    }: listFormaPagamentoUseCaseParams): Promise<FormaPagamentoPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.FormaPagamentosRepository.findAll({ page, skip, take });
    }
}

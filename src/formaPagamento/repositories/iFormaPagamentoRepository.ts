import { FormaPagamento } from "../entities/formaPagamento";
export type CreateFormaPagamentoDTO = {
    formaPagamento: string;
    quantidadeVezes: number;
    dtInicioPagamento: Date;
};
export type PaginateParams = {
    page: number;
    skip: number;
    take: number;
};

export type FormaPagamentoPaginateProperties = {
    perPage: number;
    total: number;
    currentPage: number;
    data: FormaPagamento[];
};

export interface IFormaPagamentoRepository {
    create({
        formaPagamento,
        quantidadeVezes,
        dtInicioPagamento,
    }: CreateFormaPagamentoDTO): Promise<FormaPagamento>;
    save(formaPagamento: FormaPagamento): Promise<FormaPagamento>;
    findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<FormaPagamentoPaginateProperties>;
    findById(id: string): Promise<FormaPagamento | null>;
    findByName(formaPagamento: string): Promise<FormaPagamento | null>;
    delete(formaPagamento: FormaPagamento): Promise<void>;
}

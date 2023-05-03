import { FormaPagamento } from "../entities/formaPagamento";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";
import {
    CreateFormaPagamentoDTO,
    IFormaPagamentoRepository,
    PaginateParams,
    FormaPagamentoPaginateProperties,
} from "./iFormaPagamentoRepository";

export class RepositoryFormaPagamento implements IFormaPagamentoRepository {
    private repository: Repository<FormaPagamento>;

    constructor() {
        this.repository = dataSource.getRepository(FormaPagamento);
    }

    async create({
        formaPagamento,
        quantidadeVezes,
        dtInicioPagamento,
    }: CreateFormaPagamentoDTO): Promise<FormaPagamento> {
        const FormaPagamento = this.repository.create({
            formaPagamento,
            quantidadeVezes,
            dtInicioPagamento,
        });
        return this.repository.save(FormaPagamento);
    }
    async save(FormaPagamento): Promise<FormaPagamento> {
        return this.repository.save(FormaPagamento);
    }
    async delete(FormaPagamento): Promise<void> {
        await this.repository.remove(FormaPagamento);
    }
    async findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<FormaPagamentoPaginateProperties> {
        const [FormaPagamento, count] = await this.repository
            .createQueryBuilder()
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const result = {
            perPage: take,
            total: count,
            currentPage: page,
            data: FormaPagamento,
        };
        return result;
    }
    async findByName(formaPagamento: string): Promise<FormaPagamento | null> {
        return this.repository.findOneBy({ formaPagamento });
    }
    async findById(id: string): Promise<FormaPagamento | null> {
        return this.repository.findOneBy({ id });
    }
}

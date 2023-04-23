import { Produto } from "../entities/produtos";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";
import {
    CreateProdutoDTO,
    IProdutoRepository,
    PaginateParams,
    ProdutosPaginateProperties,
} from "./iProdutosRepository";

export class RepositoryProdutos implements IProdutoRepository {
    private repository: Repository<Produto>;

    constructor() {
        this.repository = dataSource.getRepository(Produto);
    }

    async create({
        name,
        sn_estoque,
        valor,
        sn_catalogo,
        pagina_catalogo,
    }: CreateProdutoDTO): Promise<Produto> {
        const produto = this.repository.create({
            name,
            sn_estoque,
            valor,
            sn_catalogo,
            pagina_catalogo,
        });
        return this.repository.save(produto);
    }
    async save(produto): Promise<Produto> {
        return this.repository.save(produto);
    }
    async delete(produto): Promise<void> {
        await this.repository.remove(produto);
    }
    async findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<ProdutosPaginateProperties> {
        const [produtos, count] = await this.repository
            .createQueryBuilder()
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const result = {
            perPage: take,
            total: count,
            currentPage: page,
            data: produtos,
        };
        return result;
    }
    async findByName(name: string): Promise<Produto | null> {
        return this.repository.findOneBy({ name });
    }
    async findById(id: string): Promise<Produto | null> {
        return this.repository.findOneBy({ id });
    }
}

import { Produto } from "../entities/produtos";

export type CreateProdutoDTO = {
    name: string;
    sn_estoque: boolean;
    valor: number;
    sn_catalogo: boolean;
    pagina_catalogo: number;
};
export type PaginateParams = {
    page: number;
    skip: number;
    take: number;
};

export type ProdutosPaginateProperties = {
    perPage: number;
    total: number;
    currentPage: number;
    data: Produto[];
};

export interface IProdutoRepository {
    create({ name }: CreateProdutoDTO): Promise<Produto>;
    save(produto: Produto): Promise<Produto>;
    findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<ProdutosPaginateProperties>;
    findById(id: string): Promise<Produto | null>;
    findByName(name: string): Promise<Produto | null>;
    delete(produto: Produto): Promise<void>;
}

import { ListaPedidos } from "../entities/listaPedidos";
export type CreateListPedidosDTO = {
    produto: string;
    quantidade: number;
    sn_catalogo: boolean;
    pagina_catalogo: number;
};
export type PaginateParams = {
    page: number;
    skip: number;
    take: number;
};

export type ListaPedidosPaginateProperties = {
    perPage: number;
    total: number;
    currentPage: number;
    data: ListaPedidos[];
};

export interface IListaPedidosRepository {
    create({
        produto,
        quantidade,
        sn_catalogo,
        pagina_catalogo,
    }: CreateListPedidosDTO): Promise<ListaPedidos>;
    save(listaPedidos: ListaPedidos): Promise<ListaPedidos>;
    findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<ListaPedidosPaginateProperties>;
    findById(id: string): Promise<ListaPedidos | null>;
    findByName(name: string): Promise<ListaPedidos | null>;
    delete(listaPedidos: ListaPedidos): Promise<void>;
}

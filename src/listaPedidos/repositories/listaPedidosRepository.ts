import { ListaPedidos } from "../entities/listaPedidos";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";
import {
    CreateListPedidosDTO,
    IListaPedidosRepository,
    PaginateParams,
    ListaPedidosPaginateProperties,
} from "./iListaPedidosRepository";

export class RepositoryListaPedidos implements IListaPedidosRepository {
    private repository: Repository<ListaPedidos>;

    constructor() {
        this.repository = dataSource.getRepository(ListaPedidos);
    }

    async create({
        produto,
        quantidade,
        sn_catalogo,
        pagina_catalogo,
    }: CreateListPedidosDTO): Promise<ListaPedidos> {
        const listaPedidos = this.repository.create({
            produto,
            quantidade,
            sn_catalogo,
            pagina_catalogo,
        });
        return this.repository.save(listaPedidos);
    }
    async save(ListaPedido): Promise<ListaPedidos> {
        return this.repository.save(ListaPedido);
    }
    async delete(ListaPedido): Promise<void> {
        await this.repository.remove(ListaPedido);
    }
    async findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<ListaPedidosPaginateProperties> {
        const [ListaPedidos, count] = await this.repository
            .createQueryBuilder()
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const result = {
            perPage: take,
            total: count,
            currentPage: page,
            data: ListaPedidos,
        };
        return result;
    }
    async findByName(produto: string): Promise<ListaPedidos | null> {
        return this.repository.findOneBy({ produto });
    }
    async findById(id: string): Promise<ListaPedidos | null> {
        return this.repository.findOneBy({ id });
    }
}

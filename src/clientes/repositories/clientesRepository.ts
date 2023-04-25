import { Cliente } from "../entities/clientes";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";
import {
    CreateClienteDTO,
    IClientesRepository,
    PaginateParams,
    ClientesPaginateProperties,
} from "./iClientesRepository";

export class RepositoryClientes implements IClientesRepository {
    private repository: Repository<Cliente>;

    constructor() {
        this.repository = dataSource.getRepository(Cliente);
    }

    async create({
        name,
        endereco,
        numero,
        telefone,
        cidade,
        montante_total,
    }: CreateClienteDTO): Promise<Cliente> {
        const Cliente = this.repository.create({
            name,
            endereco,
            numero,
            telefone,
            cidade,
            montante_total,
        });
        return this.repository.save(Cliente);
    }
    async save(Cliente): Promise<Cliente> {
        return this.repository.save(Cliente);
    }
    async delete(Cliente): Promise<void> {
        await this.repository.remove(Cliente);
    }
    async findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<ClientesPaginateProperties> {
        const [Clientes, count] = await this.repository
            .createQueryBuilder()
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const result = {
            perPage: take,
            total: count,
            currentPage: page,
            data: Clientes,
        };
        return result;
    }
    async findByName(name: string): Promise<Cliente | null> {
        return this.repository.findOneBy({ name });
    }
    async findById(id: string): Promise<Cliente | null> {
        return this.repository.findOneBy({ id });
    }
}

import { Cliente } from "../entities/clientes";

export type CreateClienteDTO = {
    name: string;
    endereco: string;
    numero: string;
    telefone: string;
    cidade: string;
    montante_total: number;
};
export type PaginateParams = {
    page: number;
    skip: number;
    take: number;
};

export type ClientesPaginateProperties = {
    perPage: number;
    total: number;
    currentPage: number;
    data: Cliente[];
};

export interface IClientesRepository {
    create({
        name,
        endereco,
        numero,
        telefone,
        cidade,
        montante_total,
    }: CreateClienteDTO): Promise<Cliente>;
    save(cliente: Cliente): Promise<Cliente>;
    findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<ClientesPaginateProperties>;
    findById(id: string): Promise<Cliente | null>;
    findByName(name: string): Promise<Cliente | null>;
    delete(cliente: Cliente): Promise<void>;
}

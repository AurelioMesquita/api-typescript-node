import { RolesPaginateProperties } from "@roles/repositories/iRolesRepository";
import { IClientesRepository } from "src/clientes/repositories/iClientesRepository";
import { inject, injectable } from "tsyringe";

type listClienteUseCaseParams = {
    page: number;
    limit: number;
};
@injectable()
export class ListClientesUseCase {
    constructor(
        @inject("RepositoryClientes")
        private clientesRepository: IClientesRepository,
    ) { }

    execute({
        page,
        limit,
    }: listClienteUseCaseParams): Promise<RolesPaginateProperties> {
        const take = limit;
        const skip = (Number(page) - 1) * take;
        return this.clientesRepository.findAll({ page, skip, take });
    }
}

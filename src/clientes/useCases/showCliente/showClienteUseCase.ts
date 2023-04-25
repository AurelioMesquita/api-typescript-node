import { Role } from "@roles/entities/roles";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IClientesRepository } from "src/clientes/repositories/iClientesRepository";

type ShowClientesParams = {
    id: string;
};
@injectable()
export class ShowClienteUseCase {
    constructor(
        @inject("RepositoryClientes")
        private clientesRepository: IClientesRepository,
    ) { }
    async execute({ id }: ShowClientesParams): Promise<Role> {
        const cliente = await this.clientesRepository.findById(id);
        if (!cliente) throw new AppError("Client not found", 404);
        return cliente;
    }
}

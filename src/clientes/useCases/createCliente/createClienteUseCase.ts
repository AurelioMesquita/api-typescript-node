import { AppError } from "@shared/errors/AppError";
import { injectable, inject } from "tsyringe";
import { Cliente } from "src/clientes/entities/clientes";
import { IClientesRepository } from "src/clientes/repositories/iClientesRepository";

type CreateClienteDTO = {
    name: string;
    endereco: string;
    numero: string;
    telefone: string;
    cidade: string;
    montante_total: number;
};
@injectable()
export class CreateClienteUseCase {
    constructor(
        @inject("RepositoryClientes")
        private clientesRepository: IClientesRepository,
    ) { }
    async execute({
        name,
        endereco,
        numero,
        telefone,
        cidade,
        montante_total,
    }: CreateClienteDTO): Promise<Cliente> {
        const produtoAlreadyExists = await this.clientesRepository.findByName(
            name,
        );
        if (produtoAlreadyExists) throw new AppError("Client Already exists");
        return this.clientesRepository.create({
            name,
            endereco,
            numero,
            telefone,
            cidade,
            montante_total,
        });
    }
}

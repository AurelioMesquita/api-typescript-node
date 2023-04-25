import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { IClientesRepository } from "src/clientes/repositories/iClientesRepository";
import { Cliente } from "src/clientes/entities/clientes";

type UpdateClienteTO = {
    id: string;
    name: string;
    endereco: string;
    numero: string;
    telefone: string;
    cidade: string;
    montante_total: number;
};

@injectable()
export class UpdateClientesUseCase {
    constructor(
        @inject("RepositoryClientes")
        private clientesRepository: IClientesRepository,
    ) { }
    async execute({
        id,
        name,
        endereco,
        numero,
        telefone,
        cidade,
        montante_total,
    }: UpdateClienteTO): Promise<Cliente> {
        const cliente = await this.clientesRepository.findById(id);
        if (!cliente) throw new AppError("Client not found", 404);
        const nameExist = await this.clientesRepository.findByName(name);
        if (nameExist && cliente.name !== nameExist.name)
            throw new AppError("Name Already exists");

        cliente.name = name;
        cliente.endereco = endereco;
        cliente.numero = numero;
        cliente.telefone = telefone;
        cliente.cidade = cidade;
        cliente.montante_total = montante_total;
        return this.clientesRepository.save(cliente);
    }
}

import { Role } from "@roles/entities/roles";
import { dataSource } from "@shared/typeorm";
import { Repository } from "typeorm";
import {
    CreateRoleDTO,
    IRolesRepository,
    PaginateParams,
    RolesPaginateProperties,
} from "./iRolesRepository";

export class RepositoryRoles implements IRolesRepository {
    private repository: Repository<Role>;

    constructor() {
        this.repository = dataSource.getRepository(Role);
    }

    async create({ name }: CreateRoleDTO): Promise<Role> {
        const role = this.repository.create({ name });
        return this.repository.save(role);
    }
    async save(role): Promise<Role> {
        return this.repository.save(role);
    }
    async delete(role): Promise<void> {
        await this.repository.remove(role);
    }
    async findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<RolesPaginateProperties> {
        const [roles, count] = await this.repository
            .createQueryBuilder()
            .skip(skip)
            .take(take)
            .getManyAndCount();
        const result = {
            perPage: take,
            total: count,
            currentPage: page,
            data: roles,
        };
        return result;
    }
    async findByName(name: string): Promise<Role | null> {
        return this.repository.findOneBy({ name });
    }
    async findById(id: string): Promise<Role | null> {
        return this.repository.findOneBy({ id });
    }
}

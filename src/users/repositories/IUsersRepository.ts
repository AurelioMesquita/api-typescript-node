import { Role } from "@roles/entities/roles";
import { User } from "../entities/user";

export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
    role: Role;
};
export type PaginateParams = {
    page: number;
    skip: number;
    take: number;
};

export type UsersPaginateProperties = {
    perPage: number;
    total: number;
    currentPage: number;
    data: User[];
};

export interface IUsersRepository {
    create({
        name,
        email,
        password,
        isAdmin,
        role,
    }: CreateUserDTO): Promise<User>;
    save(user: User): Promise<User>;
    findAll({
        page,
        skip,
        take,
    }: PaginateParams): Promise<UsersPaginateProperties>;
    findById(id: string): Promise<User | null>;
    findByName(name: string): Promise<User | null>;
    delete(user: User): Promise<void>;
}

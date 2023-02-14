import { Role } from "@roles/entities/roles";

type CreateRoleDTO = {
    name: string;
};

export class RepositoryRoles {
    private roles: Role[];

    constructor() {
        this.roles = [];
    }
    create({ name }: CreateRoleDTO): Role {
        const role = new Role();

        Object.assign(role, {
            name: name,
            created_at: new Date(),
        });

        this.roles.push(role);
        return role;
    }

    findAll(): Role[] {
        return this.roles;
    }

    findByName(name: string): Role | undefined {
        return this.roles.find(role => role.name === name);
    }
}

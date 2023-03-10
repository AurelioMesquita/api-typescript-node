import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsersTable1678446598161 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "string",
                    },
                    {
                        name: "e-mail",
                        type: "string",
                        isUnique: true,
                    },
                    {
                        name: "password",
                        type: "string",
                    },
                    {
                        name: "avatar",
                        type: "string",
                        isNullable: true,
                    },
                    {
                        name: "isAdmin",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }
}

import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClientes1682379409245 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "clientes",
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
                        name: "endereco",
                        type: "string",
                    },
                    {
                        name: "numero",
                        type: "string",
                    },
                    {
                        name: "telefone",
                        type: "string",
                    },
                    {
                        name: "cidade",
                        type: "string",
                    },
                    {
                        name: "montante_total",
                        type: "float",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("clientes");
    }
}

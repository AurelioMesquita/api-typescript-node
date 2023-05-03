import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class FormaPagamento1683069045385 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "forma_pagamento",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "formaPagamento",
                        type: "string",
                    },
                    {
                        name: "quantidadeVezes",
                        type: "int",
                    },
                    {
                        name: "dtInicioPagamento",
                        type: "timestamp",
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
        await queryRunner.dropTable("forma_pagamento");
    }
}

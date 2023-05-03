import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity("forma_pagamento")
export class FormaPagamento {
    @PrimaryColumn()
    id?: string;

    @Column()
    formaPagamento: string;

    @Column()
    quantidadeVezes: number;

    @Column()
    dtInicioPagamento: Date;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

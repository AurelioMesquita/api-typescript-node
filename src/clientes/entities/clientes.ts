import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";
@Entity("clientes")
export class Cliente {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    endereco: string;

    @Column()
    numero: string;

    @Column()
    telefone: string;

    @Column()
    cidade: string;

    @Column()
    montante_total: number;

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

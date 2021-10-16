import { Conta } from "./conta";

export class ContaPJ extends Conta {

    cnpj: number;

    constructor(
        cnpj: number,
        titular: string,
        saldo: number
    ) {
        super(titular, saldo);
        this.cnpj = cnpj;
    }

    public consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

}
import { Conta } from "./conta";
import { Tributavel } from "./tributavel";

export class ContaPJ extends Conta implements Tributavel {

    cnpj: number;

    constructor(
        cnpj: number,
        titular: string,
        saldo: number
    ) {
        super(titular, saldo);
        this.cnpj = cnpj;
    }
    calcularTributo(): number {
        return 0;
    }

    public consultar(): string {
        return `Saldo atual: ${this.consultaSaldo()}`;
    }

}
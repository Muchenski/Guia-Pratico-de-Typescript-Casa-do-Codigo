// import { Conta } from "./conta";

namespace Banco {
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
}

new Banco.ContaPJ(10311678971, "Henrique", 9989898);
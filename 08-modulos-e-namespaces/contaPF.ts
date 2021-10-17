// import { Conta } from "./conta";

namespace Banco {
    export class ContaPF extends Conta {

        cpf: number;

        constructor(
            cpf: number,
            titular: string,
            saldo: number
        ) {
            super(titular, saldo);
            this.cpf = cpf;
        }

        public consultar(): string {
            return `Saldo atual: ${this.consultaSaldo()}`;
        }

        public override sacarDoSaldo(valor: number): void {
            if (valor <= 0) {
                throw new Error("Saldo inválido! O saldo deve ser maior que zero.")
            }
            if (this.consultaSaldo() <= 0 || valor > this.consultaSaldo()) {
                throw new Error(`Sua conta não possui saldo suficiente! ${this.consultar()} | Valor desejado: ${valor}`)
            }
            super.sacarDoSaldo(valor);
        }

    }
}

new Banco.ContaPF(10311678971, "Henrique", 56565);
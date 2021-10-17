namespace Banco {
    export abstract class Conta {

        // Só pode ter seu valor setado no construtor, e uma vez setado, não poderá ser alterado novamente.
        private readonly _numeroDaConta: number;

        titular: string;
        private _saldo: number;

        // Em outras linguagens o construtor recebe o nome da classe, em TS é declarado com a palavra reservada "constructor".
        constructor(
            titular: string,
            saldo: number
        ) {
            this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
            this.titular = titular;
            this._saldo = saldo;
        }

        protected consultaSaldo(): number {
            return this._saldo;
        }

        protected adicionaSaldo(saldo: number): void {
            this._saldo += saldo;
        }

        protected sacarDoSaldo(valor: number): void {
            this._saldo -= valor;
        }

        get numeroDaConta(): number {
            return this._numeroDaConta;
        }
    }
}
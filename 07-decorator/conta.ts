import { log } from "./decoratorDeClasse";
import { analisaSaldo } from "./decoratorDeMetodo";
import { saldo } from "./decoratorDeParametro";
import { validaTitular } from "./decoratorDePropriedade";
import { analisaConta } from "./decoratorFactory";

@analisaConta("Pessoa")
@log
export class Conta {

    private readonly _numeroDaConta: number;

    @validaTitular
    titular: string;

    private _saldo: number;

    constructor(
        titular: string,
        saldo: number
    ) {
        this._numeroDaConta = Math.floor(Math.random() * 1000) + 1;
        this.titular = titular;
        this._saldo = saldo;
    }

    @analisaSaldo
    public consultaSaldo(): number {
        return this._saldo;
    }

    public adicionaSaldo(@saldo() saldo: number): void {
        this._saldo += saldo;
    }

    public sacarDoSaldo(valor: number): void {
        this._saldo -= valor;
    }

    get numeroDaConta() : number {
        return this._numeroDaConta;
    }
    
}
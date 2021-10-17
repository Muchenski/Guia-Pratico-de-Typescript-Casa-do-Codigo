//########################################################################################
//############################################ Generics:

// Função genérica simples:

// <T> Especifica o tipo genérico que será utilizado na função. 
function funcaoGenerica<T>(value: T): T {
    return value;
};

console.log(funcaoGenerica<number>(1)); // 1

console.log(funcaoGenerica<string>("")); // ""

console.log(funcaoGenerica<boolean>(true)); // true

/////////////////////////////////////////////////////////////////////////////////////////////////

abstract class Pessoa {
    private _nome: string;

    constructor(nome: string) {
        this._nome = nome;
    }

    get nome(): string {
        return this._nome;
    }
}

class PessoaFisica extends Pessoa {
    private _cpf: string;

    constructor(nome: string, cpf: string) {
        super(nome);
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf;
    }
}

class PessoaJuridica extends Pessoa {
    private _cnpj: string;

    constructor(nome: string, cnpj: string) {
        super(nome);
        this._cnpj = cnpj;
    }

    get cnpj(): string {
        return this._cnpj;
    }
}

class Carro {
    private _placa: string;
    private _valor: number;

    constructor(placa: string, valor: number) {
        this._placa = placa;
        this._valor = valor;
    }

    get placa(): string {
        return this._placa;
    }

    get valor(): number {
        return this._valor;
    }
}

interface IMulta {
    calcular(carro: Carro): void;
}

class Multa implements IMulta {
    private _descricao: string;
    private _numeroDePontosNaCarteira: number;
    private _valorFinal?: number | undefined;
    private _placaCarroMultado?: string | undefined;
    private _identificador?: string | undefined;

    constructor(descricao: string, numeroDePontosNaCarteira: number) {
        this._descricao = descricao;
        this._numeroDePontosNaCarteira = numeroDePontosNaCarteira;
    }

    set valorFinal(valorFinal: number) {
        this._valorFinal = valorFinal;
    }

    setIdentificador<P extends Pessoa>(pessoa: P) {
        if (pessoa instanceof PessoaFisica) {
            this._identificador = pessoa.cpf;

        } else if (pessoa instanceof PessoaJuridica) {
            this._identificador = pessoa.cnpj;

        } else {
            this._identificador = "Sem identificador";
        }
    }

    set placaCarroMultado(placaCarroMultado: string) {
        this._placaCarroMultado = placaCarroMultado;
    }

    calcular(carro: Carro): void {
        this._valorFinal = carro.valor * 0.005;
    }
}

function gerarMulta<P extends Pessoa, C extends Carro>(pessoa: P, carro: C, multa: Multa): Multa {
    multa.setIdentificador(pessoa);
    multa.placaCarroMultado = carro.placa;
    multa.calcular(carro);
    return multa;
}

const pessoaFisica = new PessoaFisica("Henrique", "10311678971");
const pessoaJuridica = new PessoaJuridica("Google", "66.018.008/0001-93");

const carro1 = new Carro("ABC-123", 300000);
const carro2 = new Carro("CBA-321", 900000);

const multa = new Multa("Passou no sinal vermelho", 2);

// [OUT]:
/*
Multa: {
  "_descricao": "Passou no sinal vermelho",
  "_numeroDePontosNaCarteira": 2,
  "_identificador": "10311678971",
  "_placaCarroMultado": "ABC-123",
  "_valorFinal": 1500
} 
*/
console.log(gerarMulta(pessoaFisica, carro1, multa));


// [OUT]
/*
Multa: {
  "_descricao": "Passou no sinal vermelho",
  "_numeroDePontosNaCarteira": 2,
  "_identificador": "66.018.008/0001-93",
  "_placaCarroMultado": "CBA-321",
  "_valorFinal": 4500
} 
*/
console.log(gerarMulta(pessoaJuridica, carro2, multa));

/////////////////////////////////////////////////////////////////////////////////////////////////

function fun<T, U, V, P>(args1: T, args2: U, args3: V, args4: P): V {
    return args3;
}
console.log(fun<string, number, boolean, PessoaFisica>('teste', 1, true, new PessoaFisica("Teste", "10311678971"))) // true
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

// Função genérica com vários tipos:

interface IPessoa {
    nome: string;
}

interface IPessoaFisica extends IPessoa {
    cpf: string;
}

interface ICarro {
    placa: string;
    valor: number;
}

interface IMulta {
    descricao: string;
    numeroDePontosNaCarteira: number;
    valorFinal?: number;
    placaCarroMultado?: string;
    identificador?: string;
    calcular(carro: ICarro): void;
}

function gerarMulta<P extends IPessoaFisica, C extends ICarro, M extends IMulta>(pessoa: P, carro: C, multa: M): M {
    multa.identificador = pessoa.cpf;
    multa.placaCarroMultado = carro.placa;
    multa.calcular(carro);
    return multa;
}

const pessoa: IPessoa = { nome: "Henrique" };
const pessoaFisica: IPessoaFisica = pessoa as IPessoaFisica;
pessoaFisica.cpf = "10311678971";

const carro: ICarro = { placa: "ABC-123", valor: 300000 };

const multa: IMulta = {
    descricao: "Passou no sinal vermelho",
    numeroDePontosNaCarteira: 2,
    calcular(carro: ICarro): void {
        this.valorFinal = carro.valor * 0.005;
    }
}

// [OUT]:
/*
{
  "descricao": "Passou no sinal vermelho",
  "numeroDePontosNaCarteira": 2,
  "identificador": "10311678971",
  "placaCarroMultado": "ABC-123",
  "valorFinal": 1500
} 
*/
console.log(gerarMulta(pessoaFisica, carro, multa));

/////////////////////////////////////////////////////////////////////////////////////////////////

function fun<T, U, V>(args1: T, args2: U, args3: V): V {
    return args3;
}
console.log(fun<string, number, boolean>('teste', 1, true)) // true
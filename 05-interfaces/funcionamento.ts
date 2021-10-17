//########################################################################################
//############################################ Interfaces:

// Criando um tipo literal de objeto:

let pessoa: {
    nome: string;
    idade: number;
    email: string;
    telefone: number;
};

// Válido
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com', telefone: 555555555 };


// ...Type 'string' is not assignable to type 'number'.ts(2322)...
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com', telefone: '555555555' }; // Erro de compilação.


// ...Property 'telefone' is missing in type...
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com' }; // Erro de compilação.


// ...'endereco' does not exist in type...
pessoa = { nome: 'Bill', idade: 63, email: 'bill@gmail.com', telefone: 555555555, endereco: 'rua x' }; // Erro de compilação.


// O Typescript compara os objetos sequencialmente, para ver se são compatíveis ou não.
// Ele não compara por herança, mas sim as propriedades de cada um objeto.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
// Reutilizando definições de propriedades e métodos.

let tipoPessoa: {
    nome: string;
    idade: number;
    email: string;
    telefone: number;
    falar(): void
};

// pessoa2 deverá seguir as regras definidas em tipoPessoa.
let pessoa2: typeof tipoPessoa;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tipos com Interfaces

// Diferente de uma interface em outras linguagens de programação, no Typescript, uma interface pode possuir, além de definições
// de métodos, definições de atributos.
// Porém sem inicializar os atributos e implementar os métodos definidos.

interface IPessoa {
    nome: string;
    idade: number;
    email: string;
    telefone?: number; // Propriedade opcional.
    falar(): void
}

let pessoa3: IPessoa;
let pessoa4: IPessoa;

// Interfaces podem herdar de outras interfaces.
interface PessoaJuridica extends IPessoa {
    conta: number;
    cnpj: number;
    abrirConta?(): boolean; // Método opcional.
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Outras maneiras de definir interfaces:
// Interfaces podem ser definidas por strings, constantes, números ou literais.

const example1 = 'string';
const example2 = Symbol();

interface MeuExemplo {
    [example1]: boolean;
    [example2]: string;
}

let exemplo: MeuExemplo = {
    string: true,
    [example2]: "teste"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

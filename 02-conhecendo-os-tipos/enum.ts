//########################################################################################
//############################################ Enum:

// Existem três formas de trabalhar com enum em TS:
// Number, String ou Heterogeneous

//////////////////////////////////////////////////////////////////////////

// Numérico:
// Os enums numéricos armazenam strings com valores numéricos.
// Podemos ou não inicializá-los com valores.

export enum Ex0 {
    Segunda, // 0
    Terca, // 1
    Quarta, // 2
    Quinta = 6,
    Sexta, // 7
    Sabado, // 8
    Domingo // 9
}

export enum DiaDaSemanaNumber {
    Segunda = 1,
    Terca = 2,
    Quarta = 3,
    Quinta = 4,
    Sexta = 5,
    Sabado = 6,
    Domingo = 7
}

let dia = DiaDaSemanaNumber[1]; // Terca
let diaNumero = DiaDaSemanaNumber[dia]; // 2
let diaString = DiaDaSemanaNumber["Segunda"]; // 1

//////////////////////////////////////////////////////////////////////////

// Strings:
// Diferente dos enums numéricos, os enums do tipo string precisam iniciar
// com um valor.
export enum DiaDaSemanaString {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
}

console.log(DiaDaSemanaString.Sexta); //Sexta-feira
console.log(DiaDaSemanaString['Sabado']); //Sábado

//////////////////////////////////////////////////////////////////////////

// Heterogeneous:
// Os enums Heterogeneous são pouco conhecidos. Eles aceitam os dois tipos
// de valores: strings e números.
export enum Heterogeneous {
    Segunda = 'Segunda-feira',
    Terca = 1,
    Quarta,
    Quinta,
    Sexta,
    Sabado,
    Domingo = 18,
}

console.log(Heterogeneous.Segunda); //Segunda-feira
console.log(Heterogeneous['Segunda']); //Segunda-feira
console.log(Heterogeneous['Terca']); // 1
console.log(Heterogeneous[1]); // Terça
console.log(Heterogeneous['Quarta']); // 2
console.log(Heterogeneous['Quinta']); // 3
console.log(Heterogeneous['Sexta']); // 4
console.log(Heterogeneous['Sabado']); // 5
console.log(Heterogeneous['Domingo']); // 18

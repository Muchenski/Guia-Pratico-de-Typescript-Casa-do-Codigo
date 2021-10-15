//########################################################################################
//############################################ Tupla:

// É como um array, com a diferença de que em um array, trabalhamos com um tipo de dados,
// já uma tupla pode ser uma estrutura de dados heterogênea.

let list1: [string, number, string] = ['string', 1, 'string 2'];

let list2: [nome: string, idade: number, email: string] = ['BillGates', 65, 'bill@teste.com'];

let list3: [string, number] = ['Bill Gates', 1];
list3.push('Steve', 2);

let list: [string, number] = ['Bill Gates', 1];
console.log(list[0]); //Bill
console.log(list[1]); //1

// Criando uma tupla readonly:

let list4: readonly [string, number] = ["Henrique", 25];
list4.push('Steve', 2); // erro de compilação!
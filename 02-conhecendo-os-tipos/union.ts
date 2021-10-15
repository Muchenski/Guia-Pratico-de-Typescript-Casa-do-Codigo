//########################################################################################
//############################################ Union:

// Nos permite combinar um ou mais tipos, utilizando a | para definir os tipos que irá aceitar.

//////////////////////////////////////////////////////////////////////////
// Tipos primitivos:

let stringOuNumber: (string | number);
stringOuNumber = 123;
stringOuNumber = "ABC";

//////////////////////////////////////////////////////////////////////////
// Arrays:

var arr: (number[] | string[]);
var i: number;

arr = [1, 2, 4]
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
arr = ["A", "B", "C", "D"]
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

//////////////////////////////////////////////////////////////////////////
// Como parâmetro de funções:

function deleteTeste(usuario: string | string[]) {
    if (typeof usuario == "string") {
        console.log(usuario, "deletado"); // Para deletar um registro
    } else {
        var i: number;
        for (i = 0; i < usuario.length; i++) {
            console.log(usuario[i], "deletado"); // Para deletar mais de um registro
        }
    }
}

//////////////////////////////////////////////////////////////////////////

// typeof -> Retorna o tipo do dado verificado.
let x: string | number | boolean = 13;
console.log(typeof (x)) // Number

// instanceof -> retorna booleano.
let y: any = [];
console.log(y instanceof Number);
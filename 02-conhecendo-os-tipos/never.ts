//########################################################################################
//############################################ Never:

// O tipo "never", indica algo que nunca deve ocorrer.
// Exemplo:

function verificandoTipo(x: string | number): boolean {
    if (typeof x === "string") {
        return true;
    } else if (typeof x === "number") {
        return false;
    }
    return fail("Esse método não aceita esse tipo de type!");
}
function fail(message: string): never {
    throw new Error(message);
}

verificandoTipo("teste String");
verificandoTipo(10);
let ativo = true;

// Erro de compilação: retorna uma exception com a mensagem: Esse método não aceita esse tipo de type!
verificandoTipo(ativo);


function Update(): never {
    while (true) {
        console.log("Carregando processos!");
    }
}

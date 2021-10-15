//########################################################################################
//############################################ Tipando funções:

// Podemos definir um tipo para o retorno da função.

function calc(x: number, y: number): string {
    return `resultado: ${x + y}`;
}

function log(): void {
    console.log('Sem retorno');
}

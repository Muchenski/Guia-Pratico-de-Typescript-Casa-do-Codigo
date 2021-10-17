//########################################################################################
//############################################ Decorator de parâmetro:

// parameterIndex -> índice do parâmetro da função que vamos decorar.

export function saldo(): Function {
    return (
        target: any,
        propertyKey: number,
        parameterIndex: number,
    ) => {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    }
}

// [OUT] - Resultado do uso na classe Conta, no parâmetro de índice 0 do método "adicionaSaldo".
/*
[LOG]: Conta: {}
[LOG]: "adicionaSaldo"
[LOG]: 0
*/
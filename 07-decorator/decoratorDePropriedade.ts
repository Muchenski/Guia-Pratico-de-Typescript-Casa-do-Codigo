//########################################################################################
//############################################ Decorator de propriedade:

export function validaTitular(target: any, propertyKey: any): void {
    console.log(target); // Classe
    console.log(propertyKey); // Atributo
}

// [OUT] - Resultado do uso na classe Conta, no atributo "titular".
/*
[LOG]: Conta: {}
[LOG]: "titular"
*/
 
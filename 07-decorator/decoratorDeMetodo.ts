//########################################################################################
//############################################ Decorator de método:

export function analisaSaldo(target: any, propertyKey: any, descriptor: any) : void {
    console.log(target); // Classe
    console.log(propertyKey); // Método
    console.log(descriptor); // Propriedades
}

// [OUT] - Resultado do uso na classe Conta, no método "consultaSaldo".
/*
[LOG]: Conta: {} 
[LOG]: "consultaSaldo" 
[LOG]: {
  "writable": true,
  "enumerable": false,
  "configurable": true
} 
*/
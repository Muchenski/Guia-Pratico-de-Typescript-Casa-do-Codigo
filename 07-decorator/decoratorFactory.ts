//########################################################################################
//############################################ Decorator factory:.

export function analisaConta(tipoConta: string) : Function {
    return (_target: any) => {
        console.log(`${tipoConta} - ${_target}`);
    }
}

// [OUT] - Resultado do uso na classe Conta.
// PJ - class Conta() { ... }

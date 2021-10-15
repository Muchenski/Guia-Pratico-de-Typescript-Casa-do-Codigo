//########################################################################################
//############################################ Type Assertions:

// Funciona como o casting em outras linguagens.

function typeAssetions(codigoAny: any) {
    let codigoNumber: number = <number>codigoAny;
    return codigoNumber * 10;
}
typeAssetions(10);
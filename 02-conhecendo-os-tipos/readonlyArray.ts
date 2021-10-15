//########################################################################################
//############################################ ReadonlyArray<T>:

// É um array que permite somente leitura.

let numerosDaMega1: readonly number[] = [8, 5, 5, 11, 4, 28];
numerosDaMega1[0] = 5; // Erro de compilação!

let numerosDaMega2: ReadonlyArray<number> = [8, 5, 5, 11, 4, 28];
numerosDaMega2[0] = 12; // Erro de compilação!
numerosDaMega2.push(23); // Erro de compilação!
numerosDaMega2.pop(); // Erro de compilação!
numerosDaMega2.length = 100; // Erro de compilação!
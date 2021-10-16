//########################################################################################
//############################################ Nullish Coalescing:

// Verifica se o valor da esquerda é null ou undefined e,
// caso seja, ela retorna o resultado padrão, caso não, ela retorna o valor da
// esquerda.

let perfil1 = "admin";
let perfil2 = null;
console.log(perfil1 ?? 'Usuário comum') // admin
console.log(perfil2 ?? 'Usuário comum') // Usuário comum


var languages : Array<string> = [];

languages.push("Typescript");

// Erro de compilação: 
// Argument of type 'number' is not assignable to parameter of type 'string'.
languages.push(5);


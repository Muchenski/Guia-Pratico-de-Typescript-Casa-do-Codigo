//########################################################################################
//############################################ Generics:

class ClasseGenerica1<T> {

    private arr: Array<T> = [];

    public adicionaValor(item: T): void {
        this.arr.push(item);
    }

    public retornaValores(): Array<T> {
        return this.arr;
    }

}

let c1 = new ClasseGenerica1<number>();
c1.adicionaValor(4);
console.log(c1.retornaValores()); // [ 4 ]

let c2 = new ClasseGenerica1<string>();
c2.adicionaValor('Homem de ferro');
console.log(c2.retornaValores()); // [ 'Homem de ferro' ]

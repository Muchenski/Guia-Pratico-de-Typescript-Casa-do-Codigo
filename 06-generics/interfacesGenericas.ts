//########################################################################################
//############################################ Generics:

interface InterfaceGenerica<I> {
    removeItem(item: I): void;
}
class ClasseGenerica2<T> implements InterfaceGenerica<T> {

    private arr: Array<T> = [];

    public adicionaValor(item: T): void {
        this.arr.push(item);
    }

    public removeItem(item: T) {
        let index = this.arr.indexOf(item);
        if (index > -1) {
            this.arr.splice(index, 1);
        }
    }

    public retornaValores(): Array<T> {
        return this.arr;
    }

}

let cg1 = new ClasseGenerica2<number>();
cg1.adicionaValor(1);
cg1.adicionaValor(2);
cg1.adicionaValor(3);
console.log(cg1.retornaValores()); // [ 1, 2, 3 ]
cg1.removeItem(1);
console.log(cg1.retornaValores()); // [ 2, 3 ]

let cg2 = new ClasseGenerica2<string>();
cg2.adicionaValor('Homem de ferro');
cg2.adicionaValor('Homem aranha');
console.log(cg2.retornaValores()); // [ 'Homem de ferro', 'Homem aranha' ]
cg2.removeItem('Homem aranha');
console.log(cg2.retornaValores()); // ['Homem de ferro']

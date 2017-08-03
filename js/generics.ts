
interface IFirst {
    name: string;
}

interface ISecond {
    name : string;
    id : number;
}

//the main class
class GenericsParent<T> {
    childelement: T[];
    constructor() {
        this.childelement = [];
    }
}

let firstobj : IFirst = { name: "Akshay"};
let secondobj : ISecond = { name : "Atish", id : 602492};

let firstElem: GenericsParent<IFirst> = new GenericsParent<IFirst>();
let secondElem: GenericsParent<ISecond> = new GenericsParent<ISecond>();
firstElem.childelement.push(firstobj);
secondElem.childelement.push(secondobj);
console.log(firstElem.childelement);
console.log(secondElem.childelement);
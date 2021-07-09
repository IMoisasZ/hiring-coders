// classes
class Book {
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    read(){
        return `Estou lendo ${this.title}`
    }
}
let book = new Book('Algoritimos para viver','Brian', 500)
console.log(book);
console.log(book.read());
let otherBook = new Book('Um Exu em Nova York','Cidinha da Silva', 100)
console.log(otherBook);
console.log(otherBook.read());

// herança
class ITBook extends Book{
    constructor(title, author, pages, technology){
        super(title, author, pages);
        this.technology = technology 
    }
}
let itBook = new ITBook('Algoritimos para viver','Brian', 500, 'Algoritimos')
console.log(itBook);

// encapsulamento
class Person {
    constructor (name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set name(value){
        return this._name = value
    }
}

let person = new Person('Moisés')
console.log(person.name);
person.name = 'Moisas'
console.log(person.name);

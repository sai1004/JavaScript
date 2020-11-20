class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }

    initials() {
        return `${this.first[0]}${this.last[0]}`;
    }

    fullName() {
        return `${this.first} ${this.last}`;
    }

    get lastFirst() {
        return `${this.last}, ${this.first}`;
    }

    set lastFirst(lf) {
        // very unsafe; no checks!
        const parts = lf.split(",");
        this.last = parts[0];
        this.first = parts[1];
    }
}

let pp = new Person("Erika", "Mustermann");
console.log(pp); // Person {first: "Erika", last: "Mustermann"}
console.log(pp.initials()); // "EM"
console.log(pp.fullName()); // "Erika Mustermann"

pp.lastFirst = "Svensson, Sven";
console.log(pp); // Person {first: " Sven", last: "Svensson"}

class Developer extends Person {
    constructor(first, last, language) {
        super(first, last);
        this.language = language;
    }

    fullName() {
        // redefines the original method
        return `${super.fullName()}, ${this.language} dev`;
    }
}

let dd = new Developer("John", "Doe", "JS");
console.log(dd); // Developer {first: "John", last: "Doe", language: "JS"}
console.log(dd.initials()); // "JD"
console.log(dd.fullName()); // "John Doe, JS dev"

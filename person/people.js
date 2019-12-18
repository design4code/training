import Person from './person.js';

export class JoeDirt extends Person {
    constructor(firstName, lastName, age, status) {
        super("Joe", "Dirt", 45);
    }
}

export class MileyCirus extends Person {
    constructor(firstName, lastName, age, status) {
        super("Miley", "Cirus", 21);
    }
}

const joe = new JoeDirt();

console.log(joe.fName);
import {Person} from './person.js';

export default class JoeDirt extends Person {
    constructor() {
        super();
        this.fName = "Joe";
        this.lName = "Dirt"
        this.age = 21;
    }
}

export class MileyCirus extends Person {
    constructor() {
        super();
        this.fName = "Miley";
        this.lName = "Cirus"
        this.age = 35;
    }
}


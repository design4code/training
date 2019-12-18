export class Person {
    constructor(firstName, lastName, age, status) {
        this.fName = firstName;
        this.lName = lastName;
        this.age = age;
        this.isWalking = status;
    }

    get status() {
        return this.isWalkingStatus()
    }

    isWalkingStatus() {
        if (this.isWalking == true) {
            console.log(person.fName + " " + person.lName + " is walking");
        }
        else {
            console.log(person.fName + " " + person.lName + " idle");
        }
    }
}

const person = new Person("Tyrone", "Gower", 35);

console.log("My name is " + person.fName + " " + person.lName + " and I am " + person.age);
console.log(person.status);

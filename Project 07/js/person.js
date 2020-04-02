export class Person {
    constructor(firstName, lastName, age) {
        this.fName = firstName;
        this.lName = lastName;
        this.age = age;
        this._isWalking = false;
    }

    get status() {
        return this._isWalking === true ? `${this.fName} ${this.lName} is walking` : `${this.fName} ${this.lName} is idle`
    }

    startWalking() {
        this._isWalking = true;
    }

    stopWalking() {
        this._isWalking = false;
    }

}



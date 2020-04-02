import {Person} from './person.js';


export class Logic {
    constructor() {
        globalThis.addEventListener("keyup", this.enableBtnCreate);
        globalThis.addEventListener("click", this.create);
    }

    get firstName() {
        return 
    }

    dispose() {
        globalThis.removeEventListener("keyup", this.enableBtnCreate);
        globalThis.addEventListener("click", this.create);
    }

    enableBtnCreate() {
        const btnRequired = document.querySelector("#create");
        const reqFields = document.querySelectorAll("input");
        let empty = false

        for (let element of reqFields) {
            if (element.value == '') {
                empty = true
            }
        }

        return empty ? btnRequired.setAttribute("disabled", "") : btnRequired.removeAttribute("disabled")
    }

    create() {
        
        const newPerson = new Person(fname.value, lname.vale, age.value);

        console.log(`${newPerson.fName} ${newPerson.lName} ${newPerson.age}`)
    }
}
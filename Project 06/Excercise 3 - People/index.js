import {Person} from './person.js';
import {MileyCirus} from './people.js';
import JoeDirt from './people.js';

const person = new Person("Tyrone", "Gower", 35);
const joe = new JoeDirt();
const miley = new MileyCirus();
joe.stopWalking();
miley.startWalking();
console.log(`${joe.status} and ${miley.status}`);

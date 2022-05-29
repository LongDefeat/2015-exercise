import fruits from "./foods";
import {choice, remove} from "./helpers"

let fruit = choice(fruits);

console.log(`I'd like one ${fruit}, please!`);

console.log(`Here you go: ${fruit}.`);

console.log(`Delicioso! May I have another?`);

let leftovers = remove(fruit, fruits);

console.log(`I am sorry, we are all out. We do have ${leftovers.length}.`)


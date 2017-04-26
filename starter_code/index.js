const Elevator = require('./elevator.js');
const Person = require('./person.js');

Elevator.start();

let elevator = new Elevator();
const Julia = new Person("Julia", 0, 2);
const Joana = new Person("Joana", 5, 4);
const Fran = new Person("Fran", 3, 8);
const Raul = new Person("Raul", 9, 0);
const Papu = new Person("Papu", 10, 2);

elevator.call(Julia);
elevator.call(Joana);
elevator.call(Fran);
elevator.call(Raul);
elevator.call(Papu);

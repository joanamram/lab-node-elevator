const Person = require('./person.js');

class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.requests   = [];
    this.direction = "Up";
    this.passengers = [];
    this.waitingList = [];
    }

    log() {
      console.log("We are going to" + this.direction + "and we are in the floor" + this.floor);
    }


    update () {
      log();
    }

    start(){
      this.timer = setInterval(() => update(),1000);
    }

    stop() {
      clearInterval(this.timer);
    }


    floorUp() {
      if(this.floor < 10){
      this.floor += 1;
      this.direction ="up";
      }
    }

    floorDown() {
      if(this.floor > 0){
      this.floor -= 1;
      this.direction ="down";
      }
    }

    call(person) {
      this.waitingList.push(person);
      this.requests.push(person.originFloor);
    }

    _passengersEnter(passenger) {
      if(this.waitingList.length > 0){
        this.passengers.push(passenger);
        this.waitingList.pop(passenger);
        this.requests.push(destinationFloor);
      } console.log("Julia has enteres the elevator");
    }


    _passengersLeave(passenger) {
      if(destinationFloor === originFloor){
        this.passengers.pop(passenger);
      } console.log("Julia has left the elevator");
    }

}

module.exports = Elevator;

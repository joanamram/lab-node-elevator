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
      this.log();
      let person = this.passengers;
      if (this.requests.length > 0) {
        if (this.requests[0] < this.floor) {
          this.floorDown();
        }else if (this.requests[0] > this.floor) {
          this.floorUp();
        }else if (this.requests[0] == this.floor) {
          this._passengersLeave(person[0]);}
        }else
      if (this.waitingList.length > 0 ) {
        if (this.waitingList[0].originFloor> this.floor) {
          this.floorUp();
        }else if (this.waitingList[0].originFloor< this.floor) {
          this.floorDown();
        }else if (this.waitingList[0].originFloor == this.floor) {
          this._passengersEnter(this.waitingList[0]);
        }
      }
    }


    start(){
      this.timer = setInterval(() => update(),1000);
    }

    stop() {
      clearInterval(this.timer);
    }


    floorDown() {
      if(this.floor < 10){
      this.floor += 1;
      this.direction ="down";
      }
    }

    floorUp() {
      if(this.floor > 0){
      this.floor -= 1;
      this.direction ="up";
      }
    }

    call(person) {
      this.waitingList.push(person);
      this.requests.push(person.originFloor);
    }

    _passengersEnter(passenger) {
      let passengerPosition = this.waitingList.indexOf(person);
      this.waitingList.splice(passengerPosition, 1);
      this.requests.push(person.destinationFloor);
      this.passengers.push(person);
      let message = `${person.name} has entered the elevator`;
    } console.log(message);
    }


    _passengersLeave(passenger) {
      let passengerPosition = this.passengers.indexOf(person);
      this.passengers.splice(passengerPosition,1);
      this.requests.splice(0,1);
      let message = `${person.name} has left the elevator`;
      console.log(message);
    }

}

module.exports = Elevator;

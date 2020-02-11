  export const vehicle = {
    move(){
      console.log(`${this.name} is moving`);
    },
    stop(){
      console.log(`${this.name} stopped`);
    }
  };

  export const ship = {
    name: 'Argo',
    startMachine(){
      console.log(`${this.name} lifting anchor up`);
      return this.move();
    },
    stopMachine(){
      return this.stop();
      console.log(`${this.name} lifting anchor down`);
    },
    __proto__: vehicle,
  }

  // ship.startMachine();
  // ship.stopMachine();
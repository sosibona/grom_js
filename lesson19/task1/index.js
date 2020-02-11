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
    },
    stop(){
      console.log(`${this.name} lifting anchor down`);
    },
    stopMachine(){
      return this.stop();
    },
  }

  // ship.startMachine();
  // ship.stopMachine();
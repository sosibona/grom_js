export const timer = {
  secondPassed: 0,
  minsPassed: 0,
  startTimer(){
    setInterval(() => {
      this.secondPassed += 5;
      if (this.secondPassed === 60) {
        this.minsPassed++;
        this.secondPassed = 0;
      }
      //   console.log(`${this.minsPassed}:${this.secondPassed}`);
      // } else {
        
      //   console.log(`${this.minsPassed}:${this.secondPassed}`);
      // }
      
    }, 5000);
  },
  getTime(){
    if (this.secondPassed < 10) {
      const convertSecond = String(this.secondPassed).padStart(2, '0');
      return `${this.minsPassed}:${convertSecond}`;
    }

    return `${this.minsPassed}:${this.secondPassed}`;
  },
  stopTimer(){
    clearInterval();
  },
  resetTimer() {
    this.secondPassed = 0;
    this.minsPassed = 0;
  }
}



// 
// console.log(timer.getTime());

// console.log(timer.getTime());

// console.log(timer.getTime());





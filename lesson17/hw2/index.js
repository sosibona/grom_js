export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer(){
    setInterval(() => {
      this.secondsPassed += 5;
      if (this.secondsPassed === 60) {
        this.minsPassed++;
        this.secondsPassed = 0;
      }
      //   console.log(`${this.minsPassed}:${this.secondPassed}`);
      // } else {
        
      //   console.log(`${this.minsPassed}:${this.secondPassed}`);
      // }
      
    }, 5000);
  },
  getTime(){
    if (this.secondsPassed < 10) {
      const convertSecond = String(this.secondsPassed).padStart(2, '0');
      return `${this.minsPassed}:${convertSecond}`;
    }

    return `${this.minsPassed}:${this.secondsPassed}`;
  },
  stopTimer(){
    clearInterval();
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  }
}



// 
// console.log(timer.getTime());

// console.log(timer.getTime());

// console.log(timer.getTime());





export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer(){
    let timerID = setInterval(() => {
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
    clearInterval(this.timerID);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  }
}

// timer.startTimer();


// // 
// console.log(timer.getTime());
// timer.stopTimer();

// console.log(timer.getTime());

// console.log(timer.getTime());





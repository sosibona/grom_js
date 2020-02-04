let intervalID;

export const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer(){
    intervalID = setInterval(() => {
      this.secondsPassed += 5;
        console.log(`${this.minsPassed}:${this.secondsPassed}`);
      if (this.secondsPassed === 60) {
        this.minsPassed++;
        this.secondsPassed = 0;
      }
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
    clearInterval(intervalID);
  },
  resetTimer() {
    this.secondsPassed = 0;
    this.minsPassed = 0;
  }
}
// timer.startTimer();
// console.log(timer.getTime());
// timer.stopTimer();
// timer.startTimer();


// console.log(timer.getTime());

// console.log(timer.getTime());





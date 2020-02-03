  export const callbackPrompt = {
    message: 'what is your number?',
    showPrompt(){
      const number = prompt(this.message);
      console.log(number);
    },
    showDeferredPrompt(ms){
      setTimeout(this.showPrompt.bind(this), ms);
    }
  }

  callbackPrompt.showDeferredPrompt(2000);
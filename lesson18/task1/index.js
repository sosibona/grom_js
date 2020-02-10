export const event = {
  message: 'Welcome to the party!',
  guests: [
    {name: "John", age: 21, email: "example@gmail.com"},
    {name: "Mat", age: 18, email: "mat@gmail.com"},
    {name: "Bob", age: 10, email: "bob@gmail.com"}
  ],
  getInvintations(){
    return this.guests.filter(({age}) => age > 18).map(({email, name}) => ({
      text: `Dear ${name}! ${this.message}`,
      email
    }));
  }
}

console.log(event.getInvintations());
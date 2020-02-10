export const event = {
  message: 'Welcome to the party!',
  guests: [
    {name: "John", age: 21, email: "example@gmail.com"},
    {name: "Mat", age: 18, email: "mat@gmail.com"},
    {name: "Bob", age: 10, email: "bob@gmail.com"}
  ],
  getInvitations(){
    return this.guests.filter(({age}) => age >= 18).map(({name, email}) => ({
      message: `Dear ${name}! ${this.message}`,
      email
    }));
  }
}

console.log(event.getInvitations());
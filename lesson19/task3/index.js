export default {
  firstName: 'Taras',
  lastName: 'Baraniak',
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
};

// user.fullName('tttasdas adsdas');
// user.fullName('tttasdas adsdas');

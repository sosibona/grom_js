export default user = {
  firstName: 'Taras',
  lastName: 'Baraniak',
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    const [firstName, lastName] = name.split(' ');
    this.name = firstName;
    this.lastName = lastName;
  }
}

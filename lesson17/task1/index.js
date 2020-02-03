export const user = {
  firstName: 'Taras',
  lastName: 'Baraniak',
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

user.getFullName();
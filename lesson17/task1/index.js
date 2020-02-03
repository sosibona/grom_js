export const user = {
  firstName: 'Taras',
  lastName: 'Baraniak',
  getFullName() {
    return (`${this.firstName} ${this.lastName}`);
  }
}

user.getFullName();
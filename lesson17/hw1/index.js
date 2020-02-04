export const user = {
  firstName: 'Taras',
  lastName: 'Baraniak',
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
   return [this.firstName, this.lastName] = fullName.split(' ');
  }
}


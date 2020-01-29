const getCustomersList = listCustomers => {

  const values = Object.values(listCustomers);
  const keys = Object.keys(listCustomers);
  const customersArray = [];

  for (let i of values) {
    customersArray.push(Object.assign({}, i));
  }

  for (let i = 0; i < values.length; i++) {
    customersArray[i]['id'] = keys[i];
  }

  customersArray.sort((a, b) => {
      return a.age - b.age;
    });

  console.log(' i = ', customersArray);
  return customersArray;

}

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Bob',
    age: 30,
  },
  'customer-id-3': {
    name: 'Ann',
    age: 24,
  },
}

console.log(getCustomersList(customers));

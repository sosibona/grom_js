const getCustomersList = listCustomers => {
  let copyObj = Object.assign({}, listCustomers);

  for (let key in copyObj) {
    copyObj[key]['id'] = key;
  }

  const customersArray = Object.values(copyObj);

  customersArray.sort((a, b) => {
    return a.age - b.age;
  });

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

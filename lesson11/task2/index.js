function sortContacts(contacts, sorting = true) {
  if (!Array.isArray(contacts)) return null;

  if (sorting) {
    return contacts.sort((a, b) => {
      return a.name.localeCompare(b.name)
    });
  } else {
   return contacts.sort((a, b) => {
      return b.name.localeCompare(a.name)
    });
  }

}

const contactList = [
  {
    name: 'Taras',
    phoneNumber: '1'
  },
  {
    name: 'Tom',
    phoneNumber: '2'
  },
  {
    name: 'Ann',
    phoneNumber: '4'
  },
  {
    name: 'Bob',
    phoneNumber: '1'
  }
];

console.log(sortContacts(contactList));

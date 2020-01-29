const getPeople = (rooms) => {
  const room = Object.values(rooms);
  return room.flat().map(el => Object.values(el)).flat();  
}

const rooms = {
  room1: [
    {name: 'room1 name1'},
    {name: 'room1 name2'},
    {name: 'room1 name3'},
  ],
  room2: [
    {name: 'room2 name1'},
    {name: 'room2 name2'},
    {name: 'room2 name3'},
  ],
  room3: [
    {name: 'room3 name1'},
    {name: 'room3 name2'},
    {name: 'room3 name3'},
  ]
}
console.log(getPeople(rooms));
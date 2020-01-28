const getAdults = obj => {
  const resObj = {};
  for (let key in obj) {
    if (obj[key] >= 18) resObj[key] = obj[key];
  }

  return resObj;
}

const obj = {
  'John Doe': 19,
  Tom: 17,
  Bob: 18,
};

console.log(getAdults(obj));

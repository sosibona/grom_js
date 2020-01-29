const getAdulst = obj => {
	const arr = Object.entries(obj);
	return arr
				.filter(item => item[1] >= 18)
				.map(elem => elem[0]);
}

const users = {
	'John Doe': 19,
	'Tom': 17,
	'Bob': 18,
}

console.log(getAdulst(users));


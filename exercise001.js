
const somePromiseObject = () => {
	return new Promise((resolve, reject) => {
		// Generate random number between 0 and 9
		const randomInt = Math.floor(Math.random() * 10);
		console.log(randomInt);

		if (randomInt % 2 === 0) {
			// Success
			setTimeout(() => resolve('done'), 2000);
		} else {
			// Failure
			setTimeout(() => reject('error'), 2000);
		}
	});
}


// Your solution(s) to exercise001 here!

const getPromiseResponse = async () => {
	try {
		const response = await somePromiseObject();
		console.log(`Yay! Promise resolved with response: ${response}`)
	} catch(err) {
		console.log(`Boo. Promise rejected with response:${err}`)
	}
}

getPromiseResponse();

// fetchData(2).then((response) => {
// 	console.log(`Yay! Promise resolved with response: ${response}`)
// }).catch((err) => {
// 	console.log(`Boo. Promise rejected with response:${err}`)
// })
function* evens() {
	let count = 0;
	while (true) {
		count += 2;
		let reset = yield count;
		if (reset) {
			count = 0;
		}
	}
}

let sequence = evens();
console.log(sequence.next().value);
console.log(sequence.next().value);
console.log(sequence.next(true).value);
console.log(sequence.next().value);

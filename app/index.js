const product = (x) => {
	return y => {
		return y * x;
	}
}

let mult5 = product(5);
console.log(mult5(3));
let mult3 = product(3);
console.log(mult3(3));

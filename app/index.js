const budge = () => {
	let balance = 0;
	let changeBal = (val) => {
		return balance += val;
	}
	const deposit20 = () => changeBal(20);
	const check = () => balance;

	return {
		deposit20: deposit20,
		check: check
	}
}

let wallet = budge();
console.log(wallet);
wallet.deposit20();
console.log(wallet.check());
console.log(wallet.balance); // undefined!

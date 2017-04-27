class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}

	greeting() {
		console.log(`Hello, I'm ${this.name}!`);
	}
}

let king = new Animal("Lion", 4.5);
console.log(king);
console.log(king.name);
console.log(king.height);
king.greeting();
class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}

	greeting() {
		console.log(`Hello, I'm ${ this.name }!`);
	}
}

class Lion extends Animal {
	constructor(name, height, color) {
		super(name, height);
		this.color = color;
	}

	greeting() {
		console.log(`Hi, I'm ${ this.name }!`);
	}
}

let son = new Lion("Simba", 2, 'golden');
console.log(son);
son.greeting();
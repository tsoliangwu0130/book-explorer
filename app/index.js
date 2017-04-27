import Animal from "./animal";

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
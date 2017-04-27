class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}

	greeting() {
		console.log(`Hello, I'm ${ this.name }!`);
	}
}

export default Animal;
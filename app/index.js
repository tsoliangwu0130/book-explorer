let word = "hello world";

console.log(word.startsWith("hello"));
console.log(word.endsWith("world"));
console.log(word.includes("llo w"));

console.log("===========");

const addToCart = (item, number) => {
	console.log(number, "isFinite", Number.isFinite(number));
	console.log(number, "isSafe", Number.isSafeInteger(number));
} 

addToCart("shoes", 5);
addToCart("shoes", Infinity);
addToCart("shoes", Math.pow(2, 54));
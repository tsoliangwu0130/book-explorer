function* arrayIterator() {
	yield* arguments;
}

var it = arrayIterator(1, 2, 3);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

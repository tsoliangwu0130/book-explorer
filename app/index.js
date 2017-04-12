let a = [20, 30, 40];
let b = [10, ...a, 50];
console.log(b);

function collect(...a){
	console.log(a);
}

collect(1, 2, 3, 4, 5);
collect('a', 2, 3, 'd');
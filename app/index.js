function print(text){
	console.log(text)
}

let a = [20, 30, 40];
let b = [10, ...a, 50];
print(b);

function collect(...a){
	print(a);
}

collect(1, 2, 3, 4, 5);
collect('a', 2, 3, 'd');
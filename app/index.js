let numArr = [[1, 'one'], [2, 'two'], [3, 'three']];
let numMap = new Map(numArr);

for (let [key, value] of numMap.entries()) {
	console.log(`${ key } points to ${ value }`);
}

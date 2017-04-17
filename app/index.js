function cheer_01(){
	console.log("Hello ES6 from cheer_01!");
}


let cheer_02 = function(){
	console.log("Hello ES6 from cheer_02!");
}

// Anonymous Function Style
let cheer_03 = () => {
	console.log("Hello ES6 from cheer_03!");
}

cheer_01();
setTimeout(cheer_02, 3000);
setTimeout(cheer_03, 5000);
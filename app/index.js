let strings = 'as;fhjsldahlhfhasdhfluahuhr';
let letters = new Map();

for (let i=0; i<strings.length; i++) {
	let letter = strings[i];
	if (!letters.has(letter)) {
		letters.set(letter, 1);
	} else {
		letters.set(letter, letters.get(letter) + 1);
	}
}

console.log(letters);

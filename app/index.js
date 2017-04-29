let p = new Promise((resolve, reject) => {
	setTimeout(() => resolve('Resolved promise data'), 3000);
});

p.then(response => console.log(response))
 .catch(error => console.log(error));

let objArray = [{name : "Mg Mg", age : 15}, {name : "Zaw Zaw", age : 17}, {name : "Tun Tun", age : 18}];

let result = objArray.map(obj => obj.age);

console.log(result);

let reult1 = [...objArray];

console.log(reult1);

function substract(a, b) {
	return new Promise((resolve, reject) => {
		let result = a - b;
		if(result) resolve(result);
		else reject();
	})
}

console.log("1111111111");
substract(5, 3).then( result => console.log("Result: ", result)).catch( _  => console.log("Error occurred!"));
console.log("2222222222");

async function substract2(a, b) {
	let result = await a - b;
	if(result) return result;
	else console.log("Error");
}

console.log("1111111111");
substract(5, 3).then( result => console.log("Result: ", result)).catch( _  => console.log("Error occurred!"));
console.log("2222222222");
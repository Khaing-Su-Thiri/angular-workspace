let hello = "Hello World";

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

function app() {
	if(true) {
		console.log(hello);
		var i = 10;
	}
	return i;
}
class Hello {
	greet() {
		console.log(hello);
	}
}
console.log(app());
let hello2 = new Hello();
hello2.greet();

let color = "Pink";
let name = "Shwe Me";
let legs = 8;

let cat = {color, name, legs};
console.log(cat);

let nums = [1, 2, 3, 4, 5, 6];
let reult2 = nums.map( num => {
	return num + 1;
});
console.log(reult2);

let reult3 = nums.filter( num => {
	return num > 5;
});
console.log(reult3);

let result4 = nums.find( num => num === 3);
console.log(result4); 

let result5 = nums.reduce( (a, n) => a + n);
console.log(result5); 

let numbers = [1, 2, 3];
let alphas = ['a', 'b', 'c'];
let result6 = [...numbers, ...alphas];
console.log(result6);

let [a, b, c] = numbers;
console.log(c);

let add = ([a, b, c]) => a + b + c;
console.log(add(numbers));

let user = {name : 'Bob', age : 20};
let res = {...user};
console.log(res);

let greet = ({name, age}) => console.log(name, age);
console.log(greet(user));

let person = {personName : 'Alice', personAge : 21};
let {personName, personAge} = person;
console.log(personName);
console.log(personAge);

let persons = [
	{
		name : "Mg Mg",
		age : 20,
	},
	{
		name : "Kyaw Kyaw",
		age : 25,
	},
]

let results = persons.map(person => {
	return { ...person, age : person.age + 5};
})
console.log(persons);
console.log(results);

let employee = {
	name : "Su Su",
	age : 13,
	education : "B.C.Sc",
}

function say({name}) {
	console.log(name);
}

say(employee);

let fruits = ["Apple", "Orange", "Mango"];
for(fruit of fruits) {
	console.log(fruit);
}

let employees = [
	{ name : "Kyaw Kyaw", position : "Manager" },
	{ name : "Aye Aye", position : "HR Staff" }
]
for(employee of employees) {
	console.log(employee.name);
}

for(index in fruits) {
	console.log(fruits[index]);
}

for(index in employees) {
	console.log(employees[index].name);
}

for(key in employee) {
	console.log(employee[key]);
}

function addTest(a, b) {
	return new Promise((resolve, reject) => {
		let result = a + b;
		if(result) resolve(result);
		else reject();
	})
}

console.log("Log1");
addTest(2, 2).then(result => console.log("Add Test: ", result)).catch(() => console.log("Error occur!"));
console.log("Log2");

async function add2(a, b) {
	let result = await a + b;
	if(result) return result;
	else throw "Error occur!";	
}

console.log("Log1");
add2(2, 2).then(result => console.log("Add 2: ", result)).catch(() => console.log("Error occur!"));
console.log("Log2");
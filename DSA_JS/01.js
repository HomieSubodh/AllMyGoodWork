//! linked list in JS
/*
const n1 = {
    data: 200,
}

const n2 = {
    data: n1.data + 100,
};

const n3 = {
    data: n2.data + n1.data + 100,
}

n1.next = n2;
n2.next = n3;

console.log(n2.data);
console.log(`n1 is:`, n1);
console.log(n1.next);
console.log(n2.next);


console.log(new Set([10, 20, 30, 50, 100, 100, 200]));
*/

// /Maps in JS/
/* 
const varOne = new Map();
varOne.set('One', 1);
varOne.set('Two', "Second");
varOne.set(3, "Third");
console.log(varOne);

// invoke map item ---> get method
console.log(varOne.get(3));
console.log(varOne.keys());

//iterate through map
for(let keys of varOne)
{
	console.log(keys);
}
console.log(varOne);

for(let key of varOne)
{
	// console.log(`Object Name is: ${key} and typeof the object is: ${typeof key}`);
	console.log(typeof key);
}
*/

function testFunc(a){
    console.log(`The value has to be printed`);
    return this;
}
const storeValues = testFunc(1000);
console.log(storeValues);
// Junior JS Interview Questions

/* function example() {
//   var a = 1;
//   if (true) {
//     var a = 2;
//     console.log(a);
//   }
//   console.log(a);

//   let b = 1;
//   if (true) {
//     let b = 2;
//     console.log(b); // 2
//   }
//   console.log(b); // 1

//   const c = 3;
//   //console.log(c); //3
//   c = 2; // Wrong
//   console.log(c); // Error
} */

//example();

/* function outerFunction() {
  let outerVariable = "I am from outer scope";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closure = outerFunction();
closure(); // I am from outer scope */

/* console.log(a); // undefined
var a = 5;
console.log(a); // 5 */

/* greet(); // Hello
function greet() {
  console.log("Hello");
}
 */

/* console.log(b); // Error
let b = 10;
console.log(b); // 10 */

/* console.log(5 == "5"); // true
console.log(5 === "5"); // false */

/* const obj1 = { name: "John" };
const obj2 = { name: "John" };

console.log(obj1 == obj2); // false
console.log(obj1 === obj2); // false */

/* function fetchData(callback) {
  setTimeout(() => {
    console.log("Data fetched");
    callback();
  }, 1000);
}

fetchData(() => {
  console.log("Callback executed");
});
 */

/* let a = null;
let b;

console.log(a); //null
console.log(b); // undefined

console.log(typeof a); // object
console.log(typeof b); // undefined */

/* let num = 42;
let str = "Hello";
let bool = true;
let obj = { key: "value" };
let arr = [1, 2, 3];
let func = function () {
  return "I am a function";
};

console.log(typeof num);
console.log(typeof str);
console.log(typeof bool);
console.log(typeof obj);
console.log(typeof arr);
console.log(typeof func); */

/* function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched");
    }, 1000);
  });
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

async function fetchDataAsync() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchDataAsync(); */

/* const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet(); // Alice

function Person(name) {
  this.name = name;
}

const person = new Person("Bob");
console.log(person.name); // Bob

function showThis() {
  console.log(this);
}

showThis(); // global object or undefined */

/* document.getElementById("parent").addEventListener("click", function (event) {
  if (event.target && event.target.matches("button")) {
    console.log("Button clicked:", event.target.textContent);
  }
}); */


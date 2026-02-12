// JS Objects 

let data = {
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}

let personName = data.employees[0].firstName;
let personAge = data.age;

console.log("Name: " + personName);
console.log("Age: " + personAge);
// parsing the JSON string into a JavaScript object
let text1 = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const obj1 = JSON.parse(text1);
console.log(obj1);

const newData = JSON.parse('{"name":"Jon banega don"}');
console.log(newData);

const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const obj = JSON.parse(text);
obj.age = eval('(' + obj.age + ')');
console.log(obj.age()); // Output: John

// stringify a JavaScript object into a JSON string
var data2;
data2 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(data2);

const obj = {name: "John", age: function () {return 30;}, city: "New York"};
// obj.age = obj.age.toString();
const myJSON = JSON.stringify(obj);
console.log(obj.age); // Output: {"name":"John","age":"function () {return 30;}","city":"New York"}


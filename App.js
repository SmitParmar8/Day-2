// // JS Objects 

// let data = {
// "employees":[
//   {"firstName":"John", "lastName":"Doe"},
//   {"firstName":"Anna", "lastName":"Smith"},
//   {"firstName":"Peter", "lastName":"Jones"}
// ]
// }

// let personName = data.employees[0].firstName;
// let personAge = data.age;

// console.log("Name: " + personName);
// console.log("Age: " + personAge);
// // parsing the JSON string into a JavaScript object
// let text1 = '{ "employees" : [' +
// '{ "firstName":"John" , "lastName":"Doe" },' +
// '{ "firstName":"Anna" , "lastName":"Smith" },' +
// '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

// const obj1 = JSON.parse(text1);
// console.log(obj1);

// const newData = JSON.parse('{"name":"Jon banega don"}');
// console.log(newData);

// const text = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
// const obj = JSON.parse(text);
// obj.age = eval('(' + obj.age + ')');
// console.log(obj.age()); // Output: John

// // stringify a JavaScript object into a JSON string
// var data2;
// data2 = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
// console.log(data2);

// const obj = {name: "John", age: function () {return 30;}, city: "New York"};
// // obj.age = obj.age.toString();
// const myJSON = JSON.stringify(obj);
// console.log(obj.age); // Output: {"name":"John","age":"function () {return 30;}","city":"New York"}



// const path = require('path');

// const notes = 'timepass/readme.md';

// console.log(path.dirname(notes)); // /users/joe
// console.log(path.basename(notes)); // notes.txt
// console.log(path.extname(notes)); // .txt
// const name = 'joe';
// const newpath = path.join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'
// console.log(newpath);
// // console.log(path.basename(notes, ".md")); // notes
// console.log(path.resolve("readme.md")); // /users/joe/notes.txt
// const ne = path.normalize('/users/joe/..//test.txt'); // '/users/test.txt')
// console.log(path.isAbsolute(ne)); // false



// const fs = require('fs');
// const path  = require('path');
// const filepath = path.normalize('../timepass/readme.md');
// console.log(filepath);
// fs.readFile('../timepass/readme.md','utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


const fs3 = require('node:fs/promises');

async function example() {
  try {
    const content = 'Some content!';
    await fs3.writeFile('timepass/readme.md', content);
  } catch (err) {
    console.log(err);
  }
}

example();
const fs = require('node:fs');

const content = 'Some content!';

try {
  fs.appendFileSync('timepass/readme.md', content);
  // file written successfully
} catch (err) {
  console.error(err);
}

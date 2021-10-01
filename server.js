// server.js
const Person = require('./person');
const Students = require('./student');
const Teacher = require('./teacher');

let person = new Person();
let student = new Students('Alex', 25, 'Male', 'Sports');
let teacher = new Teacher('Jack', 45, 'Male', 'History');
console.log(student);
console.log(teacher);

console.log(teacher.hello(teacher.name, teacher.age, teacher.subject));
console.log(student.hello(student.name, student.age));






































































// function run() {
//     let person = new Person('Vic', 30);
//     let student = new Students('Nik', 25);
//     let teacher = new Teacher('Markus', 40);
//     person.hello(person);
//     student.hello(student);    
//     teacher.hello(teacher);
// }
// if (module.parent) {
//     console.log(module);
//     exports.run = run;
// } else {
//     run();
// }
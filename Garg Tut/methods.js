//Builtin functions

const students = ["SEja","Hinge","Rita","Bp"];

function print(n){
    console.log(n);
}
students.forEach(print); //alternative for loop

students.forEach((val) => console.log(val));
students.map((val) => console.log(val));

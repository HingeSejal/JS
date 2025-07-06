//Builtin functions

const students = ["SEja","Hinge","Rita","Bp"];

function print(n){
    console.log(n);
}
students.forEach(print); //alternative for loop

students.forEach((val) => console.log(val)); //doesnt return new array
students.map((val) => console.log(val));  //returns new array


let ans = students.findIndex((num) => num==="Hinge");
console.log(ans);

students.includes("Hinge");


const numbers = [1,2,3,4,5];
const newArr = numbers.filter((num) => num %2==0);
console.log(newArr); //even number

let newArr2 = numbers.slice(1,3);
console.log(newArr2);

let newArr3 = numbers.splice(1,4); //from 1 index to 4 continuous delete
console.log(newArr3); //give deleted no
console.log(numbers); //give remained no



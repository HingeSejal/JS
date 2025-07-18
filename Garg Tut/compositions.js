function add(a,b){
    return a+b;
}
function square(val){
    return val*val;
}
function multiply(...args){
    return args.reduce((a,b)=> a*b , 1);
}

function addAndSquare(a,b){
    return square(add(a,b)); //thi is problem because we cant add multiple functions here
}
console.log(addAndSquare(2,3));


//solving promblems ussing compositions

function  compose2function(fun1 ,fun2){
    return function(a,b){
     return fun2(fun1(a,b));
    }
}

let task= compose2function(add, square);
console.log(task(2,3));


//composing unlimited functions using unlimited args

// function compose(...fns){
//      return function(...values){ //values are type of arrays
//         return fns.reduceRight( (a,b)=> b(a) , values) //iterate from right to left
//      }
// }
const composeAll = 
(...funs) =>
(...val)=>
    fns.reduceRight( (a,b)=> b(a) , values)

const c2f = (fun1,fun2)=>(a,b)=>fun2(fun1(a,b));
let task1= c2f(multiply, square);
console.log(task1(2,3));

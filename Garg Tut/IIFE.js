//IIFE - Immediately Invoked function Expression
//it is self exeecuting anonymous function

(function add(a,b){
    console.log(a+b);
})(2,3); // invoked immediately

(function say(){
    console.log("Hey");
})();

(()=> console.log("im ES6"))();

const value = (()=> 100)();
console.log(value);

const call = (async ()=> await fetch())();


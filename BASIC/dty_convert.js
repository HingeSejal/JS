let score = "33abc" 
let score1 = null  
let score2 = undefined 
let score3 = true 

console.log(typeof score)
console.log(typeof(score)) 

let valInNum = Number(score)
console.log(typeof valInNum) //num
console.log(valInNum)  

//"33abc" => NaN
//null => 0
//undefined => NaN
//true => 1

let isLoggedIn = 1
let boolIsLog = Boolean(isLoggedIn)
console.log(boolIsLog)

//1 => true
//"" => false
//"seja" => true

let value = 4
let negVal = -value
console.log(negVal)
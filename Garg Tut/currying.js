// function add(a,b,c){
//     return a+b+c;
// }
// console.log(add(2,3,4))

//currrying
function add(A){
    return function(B){
      return function(C){
        return A+B+C;
    };
    };
}
console.log(add(2)(3)(5));




// function sendautoEmail(to){
//     return function(subject){
//         return function(body){
//             
//         }
//     }
// }

const sendautoEmail=(to)=>(subject)=>(body)=> console.log(`Sending Email to ${to} for ${subject} in ${body}`);
let step1 = sendautoEmail('sejalhinge4@gmail.com');
let step2 = step1('new order conform')
step2('hey something is happpening')

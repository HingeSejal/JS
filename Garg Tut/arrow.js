// const saySeja = () => {
//     console.log("say SEJA");
// };

// saySeja( )

const saySeja = (a,b) => a+b
console.log(saySeja(1,2)) 





//for multiple arguments => spread op
// function addNumbersV2(....sejal){
//  ans =0;
//  for(i=0;i<sejal.length;i++){
//     ans = ans+ sejal[i];
//  }
//  return ans;
// }

function  addNumbers() {  //argument keyword not used in arrow fun
    let ans=0;
    for(let i=0;i<arguments.length;i=i+1){
        ans = ans + arguments[i];
    }
    return ans;
};




//HOisting - calling before fun defination
// function ko paheli he memory mai rakhta hai
// not possible in arrow fun
saySejal()
function saySejal(){
    console.log("Hii")
}




//THis Keyword => points global obj
//in arrow fun -> windows as obj
//in general -> defined obj in code

const obj = {
    value: 30,
    myfun: ()=> {
console.log(this)
    }
};
obj.myfun();

// IIFE -> The module pattern

const atm =function (initalBalance ){
    let balance = initalBalance;
    function withdraw(amt){ //using closures
        if(amt>balance){
            return "ARE U SERIOUS?"
        }
        else{
            balance-=amt;
            return balance;
        }
    }
    return {withdraw};
};
const sej = atm(5000);
console.log(sej.withdraw(400)); //shows balance

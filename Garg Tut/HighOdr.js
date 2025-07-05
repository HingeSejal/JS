//High Order function => accept func as an argument in another func
// executed after the completion of that function
function add (a,b,cb){
    let result= a+b ;
    cb(result) ;
}
add(2,4, (val)=> console.log(val));
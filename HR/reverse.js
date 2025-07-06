function reverseString(s) {
    if(typeof s === "string"){
        let reev = s.split("").reverse().join("");
    console.log(reev);
    }
    else{
        console.log("s.split is not a function");
        console.log(s);
    }
}
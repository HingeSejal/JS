const accId = 2242005
let accEmail = "sejal@hinge22.in"
var accPass = "2245" //prefer not to use var because of the issue in block scope and functional scope
accCity = "Gondia" //another method to declare variable
let accState //if var is declared but not defined then js consider it as undefined if printed
//accountId = 993 - not allowed to change the constant

accEmail = "sejaa@google.com"
accPass = "993"
accCity = "Tiroda"

console.table([accId , accEmail , accPass , accCity, accState])
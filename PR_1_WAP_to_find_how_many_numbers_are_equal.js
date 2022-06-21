var firstInteger=1;
var seconInteger=2;
var thirdInteger=1;
console.log(firstInteger)
if(firstInteger==seconInteger==thirdInteger){
    console.log("3 integers are same")
}else if(firstInteger==seconInteger || firstInteger==thirdInteger || thirdInteger==seconInteger){
    console.log("2 integers are equal")
} else{
    console.log("no integers are same")
}
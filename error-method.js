/*
*throw
*try
*catch
*finally
*/


/* throw =
var name = "beyto";
if (name !=="ahmet")
    throw Error("unexpected name")
    
console.log(name);
*/

try{
    var x=4,x1=0;

    var result = x/x1;

    if(x1===0)
        throw Error("x1 cant be zero");
    else    
        console.log(result)    ;        
}
catch (error){
    console.log(error);
}
finally{
    console.log("there are finally blogs")
}
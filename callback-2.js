//callback-funct-2

function first(callback) {
    setTimeout(function () {
      console.log("first");
      callback(third);  
    },1000)
}
function second(callback) { 
    setTimeout(() => {
        console.log("second");
        callback();
}, 2000);
        
}
function third() {
    setTimeout(() => {
         console.log("third");   
    }, 1000);

}

first(second);

//scope  (tanımlama mantığı ve yerleri)

var x = "x değişkeni";

function testFunc() {
     x = "testfunc x değişkeni"
    console.log(x);
}

console.log(x);
testFunc();
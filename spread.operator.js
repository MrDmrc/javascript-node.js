/*const arr = ['foo','bar','xyz'];

console.log(...arr);*/

/*
const arr= [1,2,3];
const arr2 = [...arr,4,5,6];//başına 3 nokta koyarsak içindekileri yazdırırı koymazsak array şeklinde yazdırır
console.log(arr2);*/

const arr = ['a','b','c','d','e','f'];

const [deger1,deger2,...rest] = arr;//ilk 2 deger dışındakileri rest array ine olarak alıyor

console.log(arr);
console.log(rest);